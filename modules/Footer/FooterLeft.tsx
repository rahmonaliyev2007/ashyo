import { AppStoreIcon, FacebookIcon, GooglePlayIcon, InstagramIcon, TelegramIcon, TwitterIcon, YouTubeIcon } from "@/assets/icons"
import ActionButton from "@/components/Actions"
import { ActionsButtonType } from "@/types/ButtonType"

export const FooterLeft = () => {
    const socialLinks = [{ id: 1, to: "/", icon: <FacebookIcon /> }, { id: 2, to: "/", icon: <YouTubeIcon /> }, { id: 3, to: "/", icon: <TelegramIcon /> }, { id: 4, to: "/", icon: <TwitterIcon /> }, { id: 5, to: "/", icon: <InstagramIcon /> }]
    return (
        <div>
            <h4 className="text-[#000000B2] text-xl font-bold mb-[21px]">Bizning ijtimoiy tarmoqlarda</h4>
            <div className="flex gap-[10px] items-center">
                {socialLinks.map((item: ActionsButtonType) => <ActionButton key={item.id} icon={item.icon} id={item.id} to={item.to} />)}
            </div>
            <h4 className="text-[#000000B2] text-xl font-bold mt-[39px] mb-[12px]">Mobil ilovani yuklab oling</h4>
            <div className="flex items-start gap-[10px]">
                <button className="py-[17px] px-[30px] flex items-center gap-[12px] rounded-[6px] bg-[#EBEFF3] text-base font-bold"><AppStoreIcon />App Store</button>
                <button className="py-[17px] px-[30px] flex items-center gap-[12px] rounded-[6px] bg-[#EBEFF3] text-base font-bold"><GooglePlayIcon />Google Play</button>
            </div>
        </div>
    )
}