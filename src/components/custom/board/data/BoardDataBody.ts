import React from 'react';
import { GridRowsProp } from '@mui/x-data-grid';

// TODO: 추후 분리 예정
export type Boards = Board[];
export interface Board {
    id?: string;
    title: string;
    contents: string;
};

export const rows: GridRowsProp = [
    {
        id: 1,
        title: 'Homepage Overview',
        contents: 8345,
        users: 212423,
    },
    {
        id: 2,
        title: 'Product Details - Gadgets',
        contents: 5653,
        users: 172240,
    },
    {
        id: 3,
        title: 'Checkout Process - Step 1',
        contents: 3455,
        users: 58240,
    },
    {
        id: 4,
        title: 'User Profile Dashboard',
        contents: 112543,
        users: 96240,
    },
    {
        id: 5,
        title: 'Article Listing - Tech News',
        contents: 3653,
        users: 142240,
    },
    {
        id: 6,
        title: 'FAQs - Customer Support',
        contents: 106543,
        users: 15240,
    },
    {
        id: 7,
        title: 'Product Comparison - Laptops',
        contents: 7853,
        users: 32240,
    },
    {
        id: 8,
        title: 'Shopping Cart - Electronics',
        contents: 8563,
        users: 48240,
    },
    {
        id: 9,
        title: 'Payment Confirmation - Bank Transfer',
        contents: 4563,
        users: 18240,
    },
    {
        id: 10,
        title: 'Product Reviews - Smartphones',
        contents: 9863,
        users: 28240,
    },
    {
        id: 11,
        title: 'Subscription Management - Services',
        contents: 6563,
        users: 24240,
    },
    {
        id: 12,
        title: 'Order Tracking - Shipments',
        contents: 12353,
        users: 38240,
    },
    {
        id: 13,
        title: 'Customer Feedback - Surveys',
        contents: 5863,
        users: 13240,
    },
    {
        id: 14,
        title: 'Account Settings - Preferences',
        contents: 7853,
        users: 18240,
    },
    {
        id: 15,
        title: 'Login Page - Authentication',
        contents: 9563,
        users: 24240,
    },
    {
        id: 16,
        title: 'Promotions - Seasonal Sales',
        contents: 13423,
        users: 54230,
    },
    {
        id: 17,
        title: 'Tutorials - How to Guides',
        contents: 4234,
        users: 19342,
    },
    {
        id: 18,
        title: 'Blog Posts - Tech Insights',
        contents: 8567,
        users: 34234,
    },
    {
        id: 19,
        title: 'Events - Webinars',
        contents: 3456,
        users: 19234,
    },
    {
        id: 20,
        title: 'Support - Contact Us',
        contents: 6734,
        users: 27645,
    },
    {
        id: 21,
        title: 'Case Studies - Success Stories',
        contents: 4567,
        users: 19345,
    },
    {
        id: 22,
        title: 'News - Industry Updates',
        contents: 7856,
        users: 34567,
    },
    {
        id: 23,
        title: 'Forum - User Discussions',
        contents: 5678,
        users: 23456,
    },
    {
        id: 24,
        title: 'Documentation - API Reference',
        contents: 6789,
        users: 27689,
    },
    {
        id: 25,
        title: 'Services - Consulting',
        contents: 4563,
        users: 19240,
    },
    {
        id: 26,
        title: 'Feedback - User Reviews',
        contents: 8564,
        users: 34240,
    },
    {
        id: 27,
        title: 'Profiles - Team Members',
        contents: 5634,
        users: 23423,
    },
    {
        id: 28,
        title: 'Notifications - Alerts',
        contents: 6745,
        users: 27654,
    },
    {
        id: 29,
        title: 'Dashboard - Metrics',
        contents: 5678,
        users: 23456,
    },
    {
        id: 30,
        title: 'Reports - Monthly Analysis',
        contents: 7890,
        users: 34567,
    },
    {
        id: 31,
        title: 'Training - Employee Onboarding',
        contents: 3456,
        users: 19234,
    },
    {
        id: 32,
        title: 'Resources - Knowledge Base',
        contents: 5678,
        users: 23456,
    },
    {
        id: 33,
        title: 'Settings - Privacy Controls',
        contents: 6789,
        users: 27689,
    },
    {
        id: 34,
        title: 'Integrations - Third-Party Services',
        contents: 4567,
        users: 19345,
    },
    {
        id: 35,
        title: 'Account - Billing Information',
        contents: 7890,
        users: 34567,
    },
];
