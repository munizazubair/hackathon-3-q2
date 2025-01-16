# Marketplace Technical Foundation - Comforty

## Overview
This README outlines the technical planning and system architecture for our marketplace. 
It details the schemas, API endpoints and workflows.


 ## Technical Requirements
**Frontend Requirements:**
- User-Friendly Interface: Browsing products should be intuitive.
- Responsive Design: Ensure compatibility with both mobile and desktop users.

**Essential Pages**
- Home
- Product Listing
- Product Details
- Cart
- Checkout
- Order Confirmation
  
**Backend Requirements**
- Sanity CMS:
- Manage product details, customer information, and order records.
- Acts as the database for the marketplace.
- Third-Party APIs: Integration Needs: Shipment tracking, Payment gateways.



## System Architecture

Below is a visual representation of the general e-commerce system architecture.

![Blank diagram - Page 1 (3)](https://github.com/user-attachments/assets/be967c30-59c2-48e7-b533-c7d9af7209b8)
![Copy of Blank diagram - Page 1 (2)](https://github.com/user-attachments/assets/d9ace158-6200-4d3c-bc99-1b3be64817ca)



## API Endpoints and their Purpose and Methods
Below are the key API endpoints, their purposes, and methods:

**Products**  
- **Endpoint**: `/products`  
- **Method**: GET  
- **Purpose**: Fetch all product details from Sanity CMS.  

**Categories**  
- **Endpoint**: `/categories`  
- **Method**: GET  
- **Purpose**: Get all product categories.  

**Users**  
- **Endpoint**: `/users`  
- **Method**: GET  
- **Purpose**: Get user information.  

**Shipment Tracking**  
- **Endpoint**: `/shipment`  
- **Method**: GET  
- **Purpose**: Fetch shipment status from a third-party API.  

