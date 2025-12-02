import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceSchema {
    name: string;
    description: string;
    price?: string;
    image?: string;
}

interface ReviewSchema {
    author: string;
    rating: number;
    reviewBody: string;
    datePublished?: string;
}

interface SEOProps {
    // Basic Meta
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'product' | 'service' | 'profile';
    
    // Article specific
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
    
    // Schema Data
    breadcrumbs?: BreadcrumbItem[];
    faqs?: FAQItem[];
    service?: ServiceSchema;
    reviews?: ReviewSchema[];
    
    // Additional controls
    noIndex?: boolean;
    noFollow?: boolean;
    locale?: string;
}

export const SEO = ({ 
    title, 
    description, 
    keywords, 
    image, 
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags,
    breadcrumbs,
    faqs,
    service,
    reviews,
    noIndex = false,
    noFollow = false,
    locale = 'en_US'
}: SEOProps) => {
    const siteName = "Pixel Mango";
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const defaultImage = "https://pixelmango.studio/og-image.png";
    const siteUrl = "https://pixelmango.studio";
    const pageUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : siteUrl;
    const imageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;
    
    // Robots directive
    const robotsContent = [
        noIndex ? 'noindex' : 'index',
        noFollow ? 'nofollow' : 'follow',
        'max-image-preview:large',
        'max-snippet:-1',
        'max-video-preview:-1'
    ].join(', ');

    // Generate Breadcrumb Schema
    const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`
        }))
    } : null;

    // Generate FAQ Schema
    const faqSchema = faqs && faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    // Generate Service Schema
    const serviceSchema = service ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "provider": {
            "@type": "Organization",
            "name": siteName,
            "url": siteUrl
        },
        ...(service.price && { 
            "offers": {
                "@type": "Offer",
                "price": service.price,
                "priceCurrency": "USD"
            }
        }),
        ...(service.image && { "image": service.image })
    } : null;

    // Generate Review Schema with Aggregate Rating
    const reviewSchema = reviews && reviews.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": title,
        "description": description,
        "brand": {
            "@type": "Brand",
            "name": siteName
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1),
            "reviewCount": reviews.length,
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.author
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating,
                "bestRating": "5",
                "worstRating": "1"
            },
            "reviewBody": review.reviewBody,
            ...(review.datePublished && { "datePublished": review.datePublished })
        }))
    } : null;

    // Article Schema for blog posts
    const articleSchema = type === 'article' ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": imageUrl,
        "author": {
            "@type": "Person",
            "name": author || "Izaz Zubayer",
            "url": "https://izazzubayer.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/logo.png`
            }
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
        },
        ...(section && { "articleSection": section }),
        ...(tags && { "keywords": tags.join(', ') })
    } : null;

    // WebPage Schema (default)
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": fullTitle,
        "description": description,
        "url": pageUrl,
        "isPartOf": {
            "@type": "WebSite",
            "name": siteName,
            "url": siteUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": siteName
        },
        "inLanguage": locale.replace('_', '-')
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="robots" content={robotsContent} />
            <meta name="googlebot" content={robotsContent} />
            
            {/* Language & Locale */}
            <html lang={locale.split('_')[0]} />
            <meta property="og:locale" content={locale} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title} />
            <meta property="og:site_name" content={siteName} />
            
            {/* Article Meta */}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {type === 'article' && author && (
                <meta property="article:author" content={author} />
            )}
            {type === 'article' && section && (
                <meta property="article:section" content={section} />
            )}
            {type === 'article' && tags && tags.map((tag, index) => (
                <meta key={index} property="article:tag" content={tag} />
            ))}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:site" content="@pixelmango" />
            <meta name="twitter:creator" content="@pixelmango" />

            {/* Canonical */}
            <link rel="canonical" href={pageUrl} />

            {/* Alternate Languages (if you add more languages) */}
            <link rel="alternate" hrefLang="en" href={pageUrl} />
            <link rel="alternate" hrefLang="x-default" href={pageUrl} />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(webPageSchema)}
            </script>
            
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}
            
            {faqSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            )}
            
            {serviceSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(serviceSchema)}
                </script>
            )}
            
            {reviewSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(reviewSchema)}
                </script>
            )}
            
            {articleSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            )}
        </Helmet>
    );
};

// Export a specialized component for Service pages
export const ServiceSEO = ({ 
    serviceName,
    serviceDescription,
    pageTitle,
    pageDescription,
    keywords,
    url,
    faqs,
    reviews
}: {
    serviceName: string;
    serviceDescription: string;
    pageTitle: string;
    pageDescription: string;
    keywords?: string;
    url: string;
    faqs?: FAQItem[];
    reviews?: ReviewSchema[];
}) => {
    const breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        { name: serviceName, url }
    ];

    return (
        <SEO
            title={pageTitle}
            description={pageDescription}
            keywords={keywords}
            url={url}
            type="service"
            breadcrumbs={breadcrumbs}
            service={{
                name: serviceName,
                description: serviceDescription
            }}
            faqs={faqs}
            reviews={reviews}
        />
    );
};

// Export a specialized component for Portfolio pages
export const PortfolioSEO = ({
    projectName,
    projectDescription,
    clientName,
    category,
    image,
    url
}: {
    projectName: string;
    projectDescription: string;
    clientName: string;
    category: string;
    image?: string;
    url: string;
}) => {
    const breadcrumbs = [
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
        { name: projectName, url }
    ];

    return (
        <SEO
            title={`${projectName} - ${category} Case Study`}
            description={projectDescription}
            keywords={`${projectName}, ${clientName}, ${category}, portfolio, case study, Pixel Mango`}
            url={url}
            image={image}
            breadcrumbs={breadcrumbs}
        />
    );
};
