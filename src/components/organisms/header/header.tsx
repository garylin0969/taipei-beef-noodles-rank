import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

// 社群連結設定
const SOCIAL_LINKS = [
    {
        href: 'https://www.linkedin.com/in/garylin0969',
        target: '_blank',
        icon: FaLinkedin,
        label: 'LinkedIn',
    },
    {
        href: 'https://www.facebook.com/profile.php?id=100009915255579&mibextid=ZbWKwL',
        target: '_blank',
        icon: FaFacebook,
        label: 'Facebook',
    },
    {
        href: 'https://github.com/garylin0969/taipei-beef-noodles-rank',
        target: '_blank',
        icon: FaGithub,
        label: 'GitHub',
    },
];

/**
 * 頁首元件
 * 
 * 顯示網站標題、Logo 以及社群媒體連結。
 */
const Header = () => {
    return (
        <header className="border-border/40 bg-background/60 sticky top-0 left-0 z-50 border-b shadow-md backdrop-blur-md">
            <div className="container mx-auto flex h-14.5 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <img
                        src={import.meta.env.BASE_URL + 'favicons/favicon-32x32.png'}
                        alt="北市牛肉麵排行榜"
                        className="h-8 w-8"
                    />
                    <h1 className="text-2xl font-bold">北市牛肉麵排行榜</h1>
                </div>
            </div>
            <div className="bg-primary/5 text-primary">
                <div className="container mx-auto">
                    <div className="flex h-8 items-center justify-center gap-x-2 py-1">
                        {SOCIAL_LINKS.map((link) => (
                            <a key={link.label} href={link.href} target={link.target} rel="noopener noreferrer">
                                <link.icon className="size-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;