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

