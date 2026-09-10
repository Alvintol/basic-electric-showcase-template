import type { ClientConfig } from '../types';

// Change this file for each client. Section order is page order.
export const client = {
  "demo": {
    "enabled": true,
    "label": "ELECTRIC SHOWCASE",
    "note": "Created by Alvin · Fictional business"
  },
  "business": {
    "name": "parked+polished",
    "monogram": "P+P",
    "location": "Calgary, Alberta"
  },
  "seo": {
    "title": "parked+polished — Electric showcase demo",
    "description": "Mobile detailing. A sharp finish. Your driveway.",
    "language": "en-CA",
    "indexable": false
  },
  "ui": {
    "skipToContent": "Skip to content",
    "menuOpen": "Menu",
    "menuClose": "Close",
    "navigationLabel": "Main navigation",
    "backToTop": "Back to top"
  },
  "footer": {
    "note": "Mobile detailing. A sharp finish. Your driveway.",
    "copyright": "parked+polished is a fictional business. Photography is for demonstration only.",
    "links": []
  },
  "headerAction": {
    "label": "Book now",
    "href": "#contact"
  },
  "hero": {
    "eyebrow": "FOR DRIVERS WHO NOTICE",
    "title": [
      "CLEAN",
      "WITHOUT",
      "COMPROMISE."
    ],
    "description": "Mobile detailing with a sharp finish and zero waiting-room time.",
    "primaryAction": {
      "label": "Choose your package",
      "href": "#services"
    },
    "secondaryAction": {
      "label": "See the details",
      "href": "#photos"
    },
    "image": {
      "src": "images/parked-polished.webp",
      "alt": "Close view of the polished navy bodywork and headlight of a sports car.",
      "width": 1201,
      "height": 1800,
      "position": "50% 60%"
    },
    "imageCaption": "The details make the difference.",
    "note": "Interior + exterior care, brought to you.",
    "locationLabel": "YYC / MOBILE DETAILING",
    "highlights": [
      {
        "title": "We come to you",
        "description": "Home or work. Your call."
      },
      {
        "title": "The full picture",
        "description": "Choose the care your car needs."
      },
      {
        "title": "A fresh finish",
        "description": "Ready for the next drive."
      }
    ]
  },
  "sections": [
    {
      "type": "services",
      "id": "services",
      "title": "Pick your level of clean.",
      "eyebrow": "THE PACKAGES",
      "navLabel": "Packages",
      "description": "Sample starting prices. Final quotes depend on vehicle size and condition.",
      "items": [
        {
          "id": "interior",
          "title": "Inside out",
          "subtitle": "Interior refresh",
          "description": "Bring the cabin back to a place you enjoy spending time.",
          "price": "From $120 CAD",
          "features": [
            "Detailed vacuum",
            "Surfaces and touchpoints",
            "Interior glass"
          ],
          "action": {
            "label": "Enquire",
            "href": "#contact"
          }
        },
        {
          "id": "signature",
          "title": "The signature",
          "subtitle": "Interior + exterior",
          "description": "A complete reset, from the dashboard to the last wheel.",
          "price": "From $180 CAD",
          "features": [
            "Interior refresh included",
            "Hand wash and wheel care",
            "Exterior glass and finishing touches"
          ],
          "action": {
            "label": "Enquire",
            "href": "#contact"
          }
        },
        {
          "id": "finish",
          "title": "Fresh finish",
          "subtitle": "Exterior care",
          "description": "Remove the road from your paintwork and bring back its shine.",
          "price": "From $100 CAD",
          "features": [
            "Careful hand wash",
            "Wheels and tyres",
            "Protective finishing spray"
          ],
          "action": {
            "label": "Enquire",
            "href": "#contact"
          }
        }
      ]
    },
    {
      "type": "showcase",
      "id": "photos",
      "title": "It’s all in the details.",
      "eyebrow": "UP CLOSE",
      "navLabel": "Showcase",
      "description": "Sample photography shown for this demo.",
      "layout": "spotlight",
      "aspect": "landscape",
      "labels": {
        "previous": "Previous photos",
        "next": "Next photos",
        "show": "Show",
        "instructions": "Swipe, scroll, or use the arrows to explore.",
        "carousel": "carousel"
      },
      "items": [
        {
          "id": "1",
          "image": {
            "src": "images/parked-polished.webp",
            "alt": "Navy sports car headlight and clean reflective bodywork.",
            "width": 1201,
            "height": 1800,
            "position": "50% 60%"
          },
          "title": "Clean lines. Clear reflections.",
          "category": "Exterior care",
          "description": "The kind of finish that makes you look back when you walk away."
        },
        {
          "id": "2",
          "image": {
            "src": "images/parked-polished-gallery.webp",
            "alt": "A detailer uses a polishing tool on the reflective side of a black car.",
            "width": 1350,
            "height": 1800,
            "position": "50% 40%"
          },
          "title": "Time for the finer details.",
          "category": "Careful finishing",
          "description": "A closer look at paintwork, panels, and all the little things."
        },
        {
          "id": "3",
          "image": {
            "src": "images/parked-polished-gallery-2.webp",
            "alt": "Clean silver sports coupe with subtle wedding ribbons, parked outdoors.",
            "width": 1800,
            "height": 1200,
            "position": "50% 50%"
          },
          "title": "Ready for an occasion.",
          "category": "A fresh start",
          "description": "A clean car makes any drive feel a little more special."
        }
      ]
    },
    {
      "type": "process",
      "id": "process",
      "title": "A better way to spend your Saturday.",
      "eyebrow": "A SIMPLE PROCESS",
      "navLabel": "How it works",
      "steps": [
        {
          "title": "Choose your package",
          "description": "Tell us your vehicle, your priorities, and where you’d like us to work."
        },
        {
          "title": "Make a little space",
          "description": "We confirm your quote, appointment, access, and any water or power requirements."
        },
        {
          "title": "Get back to your day",
          "description": "We take care of the car and walk you through the finish before we leave."
        }
      ]
    },
    {
      "type": "faq",
      "id": "questions",
      "title": "A few things before we roll.",
      "eyebrow": "GOOD TO KNOW",
      "items": [
        {
          "question": "What do I need to provide?",
          "answer": "We’ll confirm parking, access, and any water or power needs before your appointment."
        },
        {
          "question": "What if the weather changes?",
          "answer": "Outdoor appointments may need to move in poor weather. We’ll discuss a new time with you."
        },
        {
          "question": "Are these prices final?",
          "answer": "These are demo starting prices. Vehicle size, condition, and the agreed scope determine the final quote."
        }
      ]
    },
    {
      "type": "contact",
      "id": "contact",
      "title": "Your next clean starts here.",
      "eyebrow": "LET’S TALK",
      "navLabel": "Contact",
      "description": "Tell us what you drive, where you’re parked, and what needs attention.",
      "method": {
        "mode": "demo",
        "submitLabel": "Preview enquiry",
        "help": "Demo form — nothing is sent or stored.",
        "success": "That’s how an enquiry would begin. This is a demo, so your message has not been sent."
      },
      "details": [
        {
          "label": "Service area",
          "value": "Calgary and surrounding areas"
        },
        {
          "label": "Hours",
          "value": "Tuesday–Saturday · By appointment"
        }
      ],
      "fields": {
        "name": "Your name",
        "email": "Email address",
        "service": "What can we help with?",
        "message": "Tell us a little more",
        "servicePlaceholder": "Choose a service",
        "services": [
          "Inside out",
          "The signature",
          "Fresh finish"
        ]
      }
    }
  ]
} satisfies ClientConfig;
