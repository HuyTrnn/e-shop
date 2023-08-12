'use client'
import React from "react";
import { useTranslation } from "react-i18next";

function VideoContent() {
  const { t } = useTranslation();
  return (
    <div id="home-video" className="section-content w-full py-7">
      <div className="w-full flex items-center justify-center">
        <div className="max-w-2xl">
          <div className="flex items-center justify-center">
            <h2 className="font-semibold mb-2 text-4xl">{t("homeVideo.title")}</h2>
          </div>
          <div className="py-7 flex justify-center items-center flex-col">
            <div className="video-content__description mb-8 relative max-w-[580px] flex justify-center text-center items-center mr-0  after:content-[''] after:bg-main after:w-[140px] after:h-[1px] after:absolute after:bottom-[-16px]">
              {t("homeVideo.description")}
            </div>

            <div>
              <iframe
                title="youtube"
                width="790"
                height="445"
                className="relative"
                src="https://www.youtube.com/embed/GTw4fNvorZs"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoContent;
