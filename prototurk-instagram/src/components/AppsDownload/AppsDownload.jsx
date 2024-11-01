export default function AppsDownload() {
    return (
      <div className="bg-zinc-50 mt-2 p-4 text-center">
        Get the app.
        <div className="flex justify-center mt-2">
          {/* Flex  box */}
          <a
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DE12098AA-DAD2-41DA-863D-FF66D6ED0B42%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png"
              alt=""
              className="mr-2 max-h-10"
            />
          </a>

          <a
            href="https://microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png"
              alt=""
              className="max-h-10" // Max height ayarı
            />
          </a>
        </div>
      </div>
    );
  }
  