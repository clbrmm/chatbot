// File: src/pages/utils/helpers.js

/**
 * File containing utility functions for general purposes.
 */

/**
 * Function to format a date in a user-friendly way.
 * @param {Date} date - The date object to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  /**
   * Function to truncate a text string to a specified length.
   * @param {string} text - The text to truncate.
   * @param {number} maxLength - The maximum length of the truncated text.
   * @returns {string} - The truncated text.
   */
  export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength - 3) + '...';
    }
  };
  
  // Add any other utility functions as needed
  