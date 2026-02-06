# Services API Integration Guide

## Overview
The Services page has been successfully integrated with the CMS API at `https://cms.clickmecha.com/api/services`.

## Files Modified

### 1. Created: `src/utils/api.js`
This file contains all API utility functions:
- `fetchServicesData()` - Fetches services page data
- `fetchHomeData()` - Fetches home page data
- `fetchAboutData()` - Fetches about page data
- `submitContactForm()` - Submits contact form data

### 2. Updated: `src/pages/Service/Service.jsx`
The Service component now:
- Fetches data from the API on component mount
- Displays a loading spinner while fetching data
- Falls back to hardcoded data if API fails
- Dynamically renders services and "Why Choose Us" sections

## API Response Structure

```json
{
    "status": true,
    "page_content": {
        "hero_title": "Our Services",
        "hero_subtitle": "What we offer",
        "hero_image": "URL",
        "why_work_title": "Why Work With Us",
        "why_work_subtitle": "We are the best",
        "seo_title": "Services - Company Name",
        "seo_description": "Description..."
    },
    "services": [
        {
            "id": 1,
            "title": "Web Development",
            "slug": "web-development",
            "icon": "URL",
            "image": "URL",
            "short_description": "Brief description",
            "content": "Full description",
            "display_order": 1,
            "is_active": 1
        }
    ],
    "why_choose_us": [
        {
            "id": 1,
            "title": "Expert Team",
            "icon": "URL or icon name",
            "description": "Description",
            "display_order": 1,
            "is_active": 1
        }
    ]
}
```

## Features Implemented

### 1. **Dynamic Content Loading**
- Services are fetched from the API and displayed dynamically
- Page titles and subtitles are pulled from API data
- "Why Choose Us" items are rendered from API response

### 2. **Loading State**
- Shows a spinner while data is being fetched
- Provides user feedback during API calls

### 3. **Error Handling & Fallback**
- If API fails, the page falls back to hardcoded data
- Ensures the page always displays content
- Logs errors to console for debugging

### 4. **Smart Icon Handling**
- Supports both image URLs (from API) and React icons (fallback)
- For "Why Choose Us" section, checks if icon is a URL or icon name
- Maps icon names to React icon components

### 5. **Dynamic Routing**
- Service cards link to `/service/{slug}` if slug is available
- Falls back to `/contact` if no slug is provided

## Data Mapping

### Services
- API `short_description` → Component displays in card
- API `icon` → Displayed as service icon
- API `slug` → Used for routing to service detail page
- API `title` → Service card title

### Why Choose Us
- API `title` → Card title
- API `description` → Card description
- API `icon` → Either image URL or icon name (laptop, chart, home)
- Cycles through color classes: `icon-blue`, `icon-purple`, `icon-pink`

## Testing

To test the integration:

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the Services page**
   - The page should show a loading spinner briefly
   - Then display services from the API
   - If API is unavailable, fallback data will be shown

3. **Check browser console**
   - Look for any API errors
   - Verify data is being fetched correctly

## Future Enhancements

Consider implementing:
- [ ] SEO meta tags from `page_content.seo_title` and `page_content.seo_description`
- [ ] Hero image from `page_content.hero_image`
- [ ] Service detail pages using the `slug` field
- [ ] Retry logic for failed API calls
- [ ] Cache API responses to reduce network calls
- [ ] Add transition animations when data loads

## Troubleshooting

### API Not Loading
1. Check network tab in browser DevTools
2. Verify API endpoint is accessible: `https://cms.clickmecha.com/api/services`
3. Check CORS settings on the API server
4. Review console for error messages

### Fallback Data Showing
- This is expected if API is unavailable
- Check API server status
- Verify network connectivity

### Icons Not Displaying
- For API icons, ensure URLs are valid and accessible
- For fallback icons, ensure React Icons package is installed
- Check icon mapping in `getIconComponent()` function
