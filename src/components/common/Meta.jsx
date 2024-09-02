import React from "react";
import { Helmet } from "react-helmet";
import icon from "../../assets/fav icon.png";
import { useTranslation } from "react-i18next";
const Meta = ({ title, desc, fav }) => {
  const { i18n } = useTranslation();
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title ? title : i18n.language === "ar" ? "نيسكت ليفل" : "Next Level"}
      </title>
      <meta name="description" content={desc} />
      <meta
        name="google-site-verification"
        content="MStq-2dfoZCm0BgdKS1UdW6T0zssc59ZcJFvJslBiiM"
      />
      <link rel="icon" href={fav ? fav : icon} />

      <script>
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PCWK4BCR');
          `}
      </script>
      <noscript>{`
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PCWK4BCR"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        ></iframe>
      `}</noscript>
      <meta
        name="google-site-verification"
        content="MStq-2dfoZCm0BgdKS1UdW6T0zssc59ZcJFvJslBiiM"
      />
    </Helmet>
  );
};

export default Meta;
/**
 * <!-- Google Tag Manager -->
<script>

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCWK4BCR');

</script>
<!-- End Google Tag Manager -->
 */

/**
 * <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PCWK4BCR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
 */
