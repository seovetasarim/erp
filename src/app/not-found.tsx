import errorImg from '../../public/assets/img/error/error.png';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: {
        absolute: 'Sayfa Bulunamadı (404) | DijitalERP',
    },
    description:
        'Aradığınız sayfa bulunamadı. DijitalERP ana sayfasına dönerek ücretsiz offline ERP’yi indirebilirsiniz.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
        <main>
            <div className="tp-error-area pt-190 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-error-wrapper text-center">
                                <h1 className="tp-error-title">404</h1>
                                <Image src={errorImg} alt="DijitalERP — sayfa bulunamadı" />
                                <div className="tp-error-content">
                                    <h2 className="tp-error-title-sm">Sayfa bulunamadı</h2>
                                    <p>Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
                                    <Link className="tp-btn" href="/">Ana Sayfaya Dön</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
