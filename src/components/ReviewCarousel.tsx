'use client';

import React, { useState } from 'react';
import styles from './ReviewCarousel.module.css';

/* ─── Helpers ─── */
export function getRelativeDate(unixSeconds: number): string {
    const seconds = Math.floor(Date.now() / 1000) - unixSeconds;
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    const hours = Math.floor(seconds / 3600);
    if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    const days = Math.floor(seconds / 86400);
    if (days === 1) return '1 day ago';
    if (days < 7) return `${days} days ago`;
    const weeks = Math.floor(days / 7);
    if (weeks === 1) return '1 week ago';
    if (weeks < 5) return `${weeks} weeks ago`;
    const months = Math.floor(days / 30);
    if (months === 1) return 'a month ago';
    if (months < 12) return `${months} months ago`;
    const years = Math.floor(days / 365);
    return `${years} year${years === 1 ? '' : 's'} ago`;
}

/* ─── Review Data (3 reviews for Superior Pest Solutions) ─── */
export const REVIEWS = [
    {
        id: 1,
        name: "Debbie Johnston",
        timestamp: Math.floor(Date.now() / 1000) - 40 * 86400,
        initials: "DJ",
        initialsBg: "#1565c0",
        photo: "/debbie-johnston.webp",
        rating: 5,
        text: "I called Superior Pest Solutions when I noticed an ant infestation on my front porch. The owner himself came out and checked things out for me, did an inspection, and sprayed my house. The ants are GONE!! He was prompt, knowledgeable, thorough, and the price was very reasonable.\n\nI highly recommend Superior Pest Solutions for any type of pest control needs you may have. This company is prompt, professional, and affordable.",
    },
    {
        id: 2,
        name: "Bailey Ward",
        timestamp: Math.floor(Date.now() / 1000) - 40 * 86400,
        initials: "BW",
        initialsBg: "#2e7d32",
        photo: "/bailey-ward.webp",
        rating: 5,
        text: "Most trustworthy place in town! I went in without a lot of knowledge and they went above and beyond to make sure I got the exact services that I needed and ensured my return for years to come! Super helpful!!",
    },
    {
        id: 3,
        name: "Teah Jamison",
        timestamp: Math.floor(Date.now() / 1000) - 40 * 86400,
        initials: "TJ",
        initialsBg: "#8b0000",
        photo: "/teah-jamison.webp",
        rating: 5,
        text: "",
    },
];

const MAX_PREVIEW_LENGTH = 220;

/* ─── SVG Icons ─── */
const StarIcon = ({ size = 18 }: { size?: number }) => (
    <svg viewBox="0 0 14 14" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_stars)">
            <path d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z" fill="#ffc107"></path>
        </g>
        <defs>
            <clipPath id="clip0_stars">
                <rect width="14" height="14" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
);

const GoogleIcon = ({ size = 24 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" aria-hidden="true" width="16" height="16">
        <path fill="#197BFF" d="M6.757.236a.35.35 0 0 1 .486 0l1.106 1.07a.35.35 0 0 0 .329.089l1.493-.375a.35.35 0 0 1 .422.244l.422 1.48a.35.35 0 0 0 .24.24l1.481.423a.35.35 0 0 1 .244.422l-.375 1.493a.35.35 0 0 0 .088.329l1.071 1.106a.35.35 0 0 1 0 .486l-1.07 1.106a.35.35 0 0 0-.089.329l.375 1.493a.35.35 0 0 1-.244.422l-1.48.422a.35.35 0 0 0-.24.24l-.423 1.481a.35.35 0 0 1-.422.244l-1.493-.375a.35.35 0 0 0-.329.088l-1.106 1.071a.35.35 0 0 1-.486 0l-1.106-1.07a.35.35 0 0 0-.329-.089l-1.493.375a.35.35 0 0 1-.422-.244l-.422-1.48a.35.35 0 0 0-.24-.24l-1.481-.423a.35.35 0 0 1-.244-.422l.375-1.493a.35.35 0 0 0-.088-.329L.236 7.243a.35.35 0 0 1 0-.486l1.07-1.106a.35.35 0 0 0 .089-.329L1.02 3.829a.35.35 0 0 1 .244-.422l1.48-.422a.35.35 0 0 0 .24-.24l.423-1.481a.35.35 0 0 1 .422-.244l1.493.375a.35.35 0 0 0 .329-.088L6.757.236Z"></path>
        <path fill="#fff" fillRule="evenodd" d="M9.065 4.85a.644.644 0 0 1 .899 0 .615.615 0 0 1 .053.823l-.053.059L6.48 9.15a.645.645 0 0 1-.84.052l-.06-.052-1.66-1.527a.616.616 0 0 1 0-.882.645.645 0 0 1 .84-.052l.06.052 1.21 1.086 3.034-2.978Z" clipRule="evenodd"></path>
    </svg>
);

const CloseIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const ChevronLeft = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

const ChevronRight = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

/* ─── Avatar Component ─── */
function ReviewAvatar({ review }: { review: typeof REVIEWS[0] }) {
    const [imgFailed, setImgFailed] = useState(false);
    if (review.photo && !imgFailed) {
        return (
            <img
                src={review.photo}
                alt={review.name}
                className={styles.avatarImg}
                onError={() => setImgFailed(true)}
            />
        );
    }
    return (
        <div className={styles.avatar} style={{ backgroundColor: review.initialsBg }}>
            {review.initials}
        </div>
    );
}

/* ─── Main Component ─── */
export default function ReviewCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedReview, setSelectedReview] = useState<typeof REVIEWS[0] | null>(null);
    const [cardsToShow, setCardsToShow] = useState(3);

    React.useEffect(() => {
        const updateCardsToShow = () => {
            const width = window.innerWidth;
            if (width < 600) setCardsToShow(1);
            else if (width < 900) setCardsToShow(2);
            else setCardsToShow(3);
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const maxIndex = Math.max(0, REVIEWS.length - cardsToShow);

    React.useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    const prevSlide = () => {
        setCurrentIndex(curr => Math.max(0, curr - 1));
    };

    const nextSlide = () => {
        setCurrentIndex(curr => Math.min(maxIndex, curr + 1));
    };

    const openModal = (review: typeof REVIEWS[0], e: React.MouseEvent) => {
        e.preventDefault();
        setSelectedReview(review);
    };

    const closeModal = () => {
        setSelectedReview(null);
    };

    const showNav = maxIndex > 0;

    return (
        <section className={styles.section}>
            <div className="flex flex-col items-center text-center mb-8 gap-8 max-w-4xl mx-auto">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10">
                        Rated highly by homeowners across Northwest Arkansas. We pride ourselves on delivering 100% satisfaction to every neighbor we serve.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <div className={styles.ratingBadge}>
                            <GoogleIcon size={36} />
                            <span className={styles.score}>5.0</span>
                            <div style={{ display: 'flex', gap: '2px' }}>
                                {[...Array(5)].map((_, i) => <StarIcon key={i} size={36} />)}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.carouselContainer}>
                {showNav && (
                    <button
                        className={`${styles.navButton} ${styles.prevButton} ${currentIndex === 0 ? styles.disabled : ''}`}
                        onClick={prevSlide}
                        aria-label="Previous reviews"
                    >
                        <ChevronLeft />
                    </button>
                )}

                <div className={styles.viewport}>
                    <div
                        className={styles.track}
                        style={{
                            transform: `translateX(calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (cardsToShow === 1 ? 0 : 1.5 / cardsToShow)}rem))`
                        }}
                    >
                        {REVIEWS.map(review => {
                            const needsTruncation = review.text.length > MAX_PREVIEW_LENGTH;

                            return (
                                <div key={review.id} className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.avatarWrapper}>
                                            <ReviewAvatar review={review} />
                                            <div className={styles.googleIconMin}>
                                                <GoogleIcon size={20} />
                                            </div>
                                        </div>
                                        <div className={styles.userInfo}>
                                            <div className={styles.nameRow}>
                                                <span className={styles.name}>{review.name}</span>
                                                <CheckIcon />
                                            </div>
                                            <span className={styles.date}>{getRelativeDate(review.timestamp)}</span>
                                        </div>
                                    </div>
                                    <div className={styles.cardStars}>
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                    </div>
                                    <div>
                                        <p className={`${styles.cardText} ${needsTruncation ? styles.clampedText : ''}`}>
                                            {review.text}
                                        </p>
                                        {needsTruncation && (
                                            <button className={styles.readMoreBtn} onClick={(e) => openModal(review, e)}>
                                                Read more
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {showNav && (
                    <button
                        className={`${styles.navButton} ${styles.nextButton} ${currentIndex >= maxIndex ? styles.disabled : ''}`}
                        onClick={nextSlide}
                        aria-label="Next reviews"
                    >
                        <ChevronRight />
                    </button>
                )}
            </div>

            {selectedReview && (
                <>
                    <div className={styles.modalOverlay} onClick={closeModal}></div>
                    <div className={styles.modal}>
                        <button className={styles.closeBtn} onClick={closeModal} aria-label="Close modal">
                            <CloseIcon />
                        </button>
                        <div className={styles.cardHeader}>
                            <div className={styles.avatarWrapper}>
                                <ReviewAvatar review={selectedReview} />
                                <div className={styles.googleIconMin}>
                                    <GoogleIcon size={18} />
                                </div>
                            </div>
                            <div className={styles.userInfo}>
                                <div className={styles.nameRow}>
                                    <span className={styles.name}>{selectedReview.name}</span>
                                    <CheckIcon />
                                </div>
                                <span className={styles.date}>{getRelativeDate(selectedReview.timestamp)}</span>
                            </div>
                        </div>
                        <div className={styles.cardStars}>
                            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                        </div>
                        <p className={styles.modalText}>
                            {selectedReview.text}
                        </p>
                    </div>
                </>
            )}
        </section>
    );
}
