import { AppStore20Icon, AppStoreIcon, FacebookIcon, GooglePlay20Icon, GooglePlayIcon, InstagramIcon, TelegramIcon, TwitterIcon, YouTubeIcon } from "@/assets/icons"
import ActionButton from "@/components/Actions"
import { ActionsButtonType } from "@/types/ButtonType"
import { useTranslations } from "next-intl"

export const FooterLeft = () => {
    const t = useTranslations("Footer");
    const socialLinks = [{ id: 1, to: "/", icon: <FacebookIcon /> }, { id: 2, to: "/", icon: <YouTubeIcon /> }, { id: 3, to: "/", icon: <TelegramIcon /> }, { id: 4, to: "/", icon: <TwitterIcon /> }, { id: 5, to: "/", icon: <InstagramIcon /> }]
    return (
        <div>
            <div className="max-[750px]:hidden">
                <h4 className="text-[#000000B2] text-xl font-bold mb-[21px]">{t('social')}</h4>
                <div className="flex gap-[10px] items-center">
                    {socialLinks.map((item: ActionsButtonType) => <ActionButton key={item.id} icon={item.icon} id={item.id} to={item.to} />)}
                </div>
            </div>
            <h4 className="text-[#000000B2] text-xl font-bold mt-[39px] mb-[12px]">{t('downloadApp')}</h4>
            <div className="flex items-start gap-[10px] justify-between max-[500px]:hidden">
                <button className="py-[17px] px-[30px] flex items-center gap-[12px] rounded-[6px] bg-[#EBEFF3] text-base font-bold"><AppStoreIcon />App Store</button>
                <button className="py-[17px] px-[30px] flex items-center gap-[12px] rounded-[6px] bg-[#EBEFF3] text-base font-bold"><GooglePlayIcon />Google Play</button>
            </div>
            <div className="flex items-start gap-[10px] justify-between min-[500px]:hidden">
                <button className="py-[15px] px-[25px] flex items-center gap-[5px] rounded-[6px] text-[12px] bg-[#EBEFF3] text-base font-light"><AppStore20Icon/>App Store</button>
                <button className="py-[15px] px-[25px] flex items-center gap-[5px] rounded-[6px] text-[12px] bg-[#EBEFF3] text-base font-light"><GooglePlay20Icon />Google Play</button>
            </div>
        </div>
    )
}