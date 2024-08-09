"use client";
import PageIntro from "@/components/PageIntro";
import { AuroraBackground } from "@/components/ui/aurora";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Understanding Employment Law in BC",
    excerpt: "A comprehensive guide to the rights and responsibilities of employees and employers under British Columbia's employment laws.",
    date: "August 9, 2024",
    link: "/blog/employment-law-bc",
  },
  {
    id: 2,
    title: "Navigating Real Estate Law in British Columbia",
    excerpt: "Learn the key legal considerations when buying or selling property in BC, from contracts to zoning regulations.",
    date: "July 28, 2024",
    link: "/blog/real-estate-law-bc",
  },
  {
    id: 3,
    title: "Family Law: Divorce and Custody in BC",
    excerpt: "An overview of divorce, child custody, and support laws in British Columbia, providing clarity during challenging times.",
    date: "July 15, 2024",
    link: "/blog/family-law-bc",
  },
  {
    id: 4,
    title: "Wills and Estates: Planning for the Future in BC",
    excerpt: "Everything you need to know about creating a will and managing an estate in British Columbia.",
    date: "June 30, 2024",
    link: "/blog/wills-and-estates-bc",
  },
  {
    id: 5,
    title: "Understanding BC's Personal Injury Laws",
    excerpt: "A guide to personal injury claims in BC, including what to do if you're injured and how to navigate the legal process.",
    date: "June 12, 2024",
    link: "/blog/personal-injury-law-bc",
  },
];

const BlogPage = () => {
  const [articleList] = useState(articles);

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    article: {
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px 0',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    },
    articleHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
    },
    title: {
      fontSize: '26px',
      marginBottom: '12px',
      color: '#2c3e50',
      fontWeight: '600',
    },
    excerpt: {
      fontSize: '18px',
      marginBottom: '15px',
      color: '#7f8c8d',
      lineHeight: '1.6',
    },
    date: {
      fontSize: '14px',
      color: '#95a5a6',
      marginBottom: '15px',
    },
    link: {
      fontSize: '16px',
      color: '#a87c3c',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.2s ease-in-out',
    },
    linkHover: {
      color: '#2980b9',
      textDecoration: 'underline',
    },
  };

  return (
    <>
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          Explore our blog for insights, tips, and expert advice on the topics that matter. Stay informed and inspired with regularly updated content tailored to your interests.
        </p>
      </PageIntro>
      <div style={styles.container}>
       
        {articleList.map((article) => (
          <div
            key={article.id}
            style={styles.article}
            onMouseOver={(e) => {
              Object.assign(e.currentTarget.style, styles.articleHover);
            }}
            onMouseOut={(e) => {
              Object.assign(e.currentTarget.style, styles.article);
            }}
          >
      
            <h2 style={styles.title}>{article.title}</h2>
            <p style={styles.excerpt}>{article.excerpt}</p>
            <p style={styles.date}>{article.date}</p>
            <a
              href={article.link}
              style={styles.link}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, styles.linkHover)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, styles.link)}
            >
              Read more
            </a>
        
          </div>
        ))}
       
      </div>
    </>
  );
};

export default BlogPage;
