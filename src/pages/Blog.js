import React, { useEffect } from "react";
import Spinner from "../components/common/Spinner";
import { request } from "../services/axios";
import { useQuery } from "react-query";
import Hero from "../components/common/Hero";
import { useParams, useNavigate } from "react-router-dom";
import MainBtn from "../components/common/MainBtn";
import { useTranslation } from "react-i18next";
import Meta from "../components/common/Meta";
import BlogForm from "../components/blog/BlogForm";
const fetchData = (v) => {
  return request({
    url: `/blogs/${v}`,
  });
};
const Blog = () => {
  const navigate = useNavigate();
  const handleNavigate = (id) => navigate(`/blogs/${id}`);
  const { t } = useTranslation();
  const { id, slug } = useParams();
  const { isLoading, data } = useQuery(["blogs-details", id], () =>
    fetchData(id)
  );
  const sanitizeSlug = (slug) => {
    // تحويل الحروف إلى أحرف صغيرة
    let sanitizedSlug = slug.toLowerCase();

    // إزالة أي رموز غير مسموح بها باستثناء الأحرف اللاتينية والعربية والأرقام والشرطات
    sanitizedSlug = sanitizedSlug.replace(/[^a-z0-9\u0600-\u06FF\s-]/g, "");

    // استبدال المسافات بالشرطات
    sanitizedSlug = sanitizedSlug.replace(/\s+/g, "-");

    // إزالة الشرطات المكررة
    sanitizedSlug = sanitizedSlug.replace(/-+/g, "-");

    // إزالة أي شرطات في بداية أو نهاية السلاگ
    sanitizedSlug = sanitizedSlug.replace(/^-+|-+$/g, "");

    return sanitizedSlug;
  };
  useEffect(() => {
    if (data && !slug && data?.data?.data?.blog?.slug) {
      const originalSlug = data?.data?.data?.blog?.slug;
      const validSlug = sanitizeSlug(originalSlug);
      // Update the URL with the slug without reloading the page
      navigate(`/blogs/${id}/${validSlug}`, { replace: true });
    }
  }, [data, slug, id, navigate]);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Meta
        title={data?.data?.data?.blog?.meta_title}
        desc={data?.data?.data?.blog?.meta_description}
      />
      <Hero
        text={data?.data?.data?.blog?.title}
        img={data?.data?.data?.blog?.addtionalImage}
        hasImg={false}
      />
      <div className="container mx-auto px-8 md:px-16 my-8 md:my-12">
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3 bg-bgColor p-3 flex items-center">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.data?.data?.blog?.description,
              }}
            />
          </div>
          <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-2xl h-[700px] md:sticky md:top-0">
            <BlogForm blogId={id} />
          </div>
        </div>

        {data?.data?.data?.related_blogs?.length ? (
          <div className="my-8 md:my-12">
            <p className="text-center mb-8 text-xl md:text-2xl lg:text-3xl font-extrabold text-mainColor">
              {t("related blogs")}
            </p>
            {data?.data?.data?.related_blogs.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-5 gap-4  flex-col ${
                  index % 2 === 0 ? "  md:flex-row" : " md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    alt="about/img"
                    src={item.image}
                    className="w-full max-h-[450px] object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2">
                  <p className="text-center text-mainColor font-bold  mb-3">
                    {item.title}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.description.substr(0, 250),
                    }}
                    className=" text-darkColor mb-4"
                  ></p>
                  <div className="w-full flex justify-center">
                    <MainBtn
                      action={() => handleNavigate(item.id)}
                      text={t("see more")}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Blog;
