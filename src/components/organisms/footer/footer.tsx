/**
 * 頁尾元件
 * 
 * 顯示版權資訊與作者連結。
 */
const Footer = () => {
    return (
        <footer className="border-t py-4 text-center text-sm tracking-wide">
            <p>
                &copy;{' '}
                <span className="mx-1">
                    <a
                        className="hover:text-primary"
                        href="https://github.com/garylin0969"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Gary Lin
                    </a>
                </span>
            </p>
        </footer>
    );
};

export default Footer;