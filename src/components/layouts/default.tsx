import '@/components/layouts/default.css'

export default function DefaultLayout({ content }: { content: React.ReactNode }) {
    return (
        <html lang="tw">
            <body>
                <section className="header">
                    <div className="flex">
                        <div className='store-name'>
                            烏龍麵
                        </div>
                        <div className="menu">
                            <span className='menu-list'>最新消息</span>
                            <span className='menu-list'>關於我們</span>
                            <span className='menu-list'>美味餐點</span>
                            <span className='menu-list'>店鋪位置</span>
                        </div>
                    </div>
                </section>
                <div className="content">
                    {content}
                </div>
            </body>
        </html>
    );
}
