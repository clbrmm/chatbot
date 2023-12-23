// File: src/pages/index.js

import React from 'react';
import Link from 'next/link';
import styles from './../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Your Chatbot Project</h1>
      <p>
        This is the home page of your chatbot project. Customize and expand it as needed.
      </p>
      <p>
        Explore different sections, and don't forget to check out the personalized experience preferences.
      </p>
        
        <div>
            <p>
            <Link href="/PersonalizedExperience">
            <a>Go to Personalized Experience</a>
        </Link>
            </p>

            <p>
        <Link href="/ProblemResolution">
            <a>Go to Problem Resolution</a>
        </Link>
            </p>

            <p>
        <Link href="/WorkloadReduction">
            <a>Go to Workload Reduction</a>
        </Link>
            </p>
        </div>
      {/* Add more links or components as needed */}
    </div>
  );
};

export default Home;
