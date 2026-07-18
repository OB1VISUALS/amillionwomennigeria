/**
 * locations.js
 * =============
 * Solemn Assembly location data.
 *
 * UPDATE DAILY with new venues and status changes.
 * The rendering script reads directly from this array.
 *
 * DATA STRUCTURE:
 * {
 *   state:   string  — State name (Nigeria) or City/Region (Diaspora)
 *   country: string  — Full country name
 *   region:  string  — 'nigeria' or 'diaspora' (used for filter pills)
 *   venues:  array   — Array of venue objects (empty array = Coming Soon)
 *     {
 *       name:    string  — Venue/church name
 *       address: string  — Street address
 *       city:    string  — City name
 *     }
 * }
 */

const locations = [
    // =====================
    // NIGERIA — 36 States + FCT
    // =====================
    {
        state: 'Abia',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'International Conference Centre Umuahia',
                address: 'Government Station Layout, Umuahia',
                city: 'Umuahia'
            }
        ]
    },
    {
        state: 'Abuja FCT',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'National Ecumenical Centre',
                address: 'Central Business District, Abuja',
                city: 'Abuja'
            },
            {
                name: 'Living Faith Church (Winners Chapel)',
                address: 'Kubwa Expressway, Phase 4',
                city: 'Kubwa'
            },
            {
                name: 'Dunamis International Gospel Centre (Glory Dome)',
                address: 'Airport Road, Abuja',
                city: 'Abuja'
            }
        ]
    },
    {
        state: 'Adamawa',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Akwa Ibom',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Ibom Hall',
                address: 'IBB Avenue, Uyo',
                city: 'Uyo'
            }
        ]
    },
    {
        state: 'Anambra',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'All Saints Cathedral',
                address: 'Awka Road, Onitsha',
                city: 'Onitsha'
            },
            {
                name: 'St. Joseph\'s Catholic Church',
                address: 'Awka Township',
                city: 'Awka'
            }
        ]
    },
    {
        state: 'Bauchi',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Bayelsa',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'DSP Alamieyeseigha Memorial Banquet Hall',
                address: 'Government House Road, Yenagoa',
                city: 'Yenagoa'
            }
        ]
    },
    {
        state: 'Benue',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'IBB Square Makurdi',
                address: 'Old Otukpo Road, Makurdi',
                city: 'Makurdi'
            }
        ]
    },
    {
        state: 'Borno',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Cross River',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Calabar International Convention Centre',
                address: 'Summit Hills, Calabar',
                city: 'Calabar'
            }
        ]
    },
    {
        state: 'Delta',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Dome Event Centre',
                address: 'Okpanam Road, Asaba',
                city: 'Asaba'
            },
            {
                name: 'Word of Life Bible Church',
                address: 'Ajaji Road, Warri',
                city: 'Warri'
            }
        ]
    },
    {
        state: 'Ebonyi',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Christian Ecumenical Centre',
                address: 'Abakaliki Capital Territory',
                city: 'Abakaliki'
            }
        ]
    },
    {
        state: 'Edo',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Imaguero Hall',
                address: 'Ring Road, Benin City',
                city: 'Benin City'
            }
        ]
    },
    {
        state: 'Ekiti',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Enugu',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Michael Okpara Square',
                address: 'Independence Layout, Enugu',
                city: 'Enugu'
            }
        ]
    },
    {
        state: 'Gombe',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Imo',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Heroes Square',
                address: 'New Owerri Layout, Owerri',
                city: 'Owerri'
            }
        ]
    },
    {
        state: 'Jigawa',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Kaduna',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Ahmadu Bello Stadium (Multi-Purpose Hall)',
                address: 'Kabala Costain, Kaduna',
                city: 'Kaduna'
            }
        ]
    },
    {
        state: 'Kano',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Meena Event Centre',
                address: 'Bompai Road, Kano',
                city: 'Kano'
            }
        ]
    },
    {
        state: 'Katsina',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Kebbi',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Kogi',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Confluence Stadium Hall',
                address: 'Lokoja Township',
                city: 'Lokoja'
            }
        ]
    },
    {
        state: 'Kwara',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Kwara State Banquet Hall',
                address: 'Ahmadu Bello Way, Ilorin',
                city: 'Ilorin'
            }
        ]
    },
    {
        state: 'Lagos',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Main Assembly Ground',
                address: 'Ifako Bus-Stop, Oworoshoki Expressway',
                city: 'Lagos'
            },
            {
                name: 'Tafawa Balewa Square (TBS)',
                address: 'Tafawa Balewa Square, Lagos Island',
                city: 'Lagos'
            },
            {
                name: 'Faith Plaza',
                address: 'Opebi Road, Ikeja',
                city: 'Ikeja'
            }
        ]
    },
    {
        state: 'Nasarawa',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Lafia City Square',
                address: 'Jos Road, Lafia',
                city: 'Lafia'
            }
        ]
    },
    {
        state: 'Niger',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Ogun',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'June 12 Cultural Centre',
                address: 'Abeokuta Township',
                city: 'Abeokuta'
            }
        ]
    },
    {
        state: 'Ondo',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'International Culture and Event Centre (The Dome)',
                address: 'Alagbaka, Akure',
                city: 'Akure'
            }
        ]
    },
    {
        state: 'Osun',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Aurora Event Centre',
                address: 'Gbongan Road, Osogbo',
                city: 'Osogbo'
            }
        ]
    },
    {
        state: 'Oyo',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Jogor Centre',
                address: 'Liberty Road, Ibadan',
                city: 'Ibadan'
            }
        ]
    },
    {
        state: 'Plateau',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Crest Hotel & Conference Centre',
                address: 'Old Bukuru Road, Jos',
                city: 'Jos'
            }
        ]
    },
    {
        state: 'Rivers',
        country: 'Nigeria',
        region: 'nigeria',
        venues: [
            {
                name: 'Obi Wali Cultural Centre',
                address: 'Port Harcourt Township',
                city: 'Port Harcourt'
            },
            {
                name: 'Salvation Ministries (Home of Success)',
                address: 'Aba Road, Port Harcourt',
                city: 'Port Harcourt'
            }
        ]
    },
    {
        state: 'Sokoto',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Taraba',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Yobe',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },
    {
        state: 'Zamfara',
        country: 'Nigeria',
        region: 'nigeria',
        venues: []
    },

    // =====================
    // DIASPORA
    // =====================
    {
        state: 'London',
        country: 'United Kingdom',
        region: 'diaspora',
        venues: [
            {
                name: 'Jesus House London',
                address: '112 Brent Terrace, London NW2 1LL',
                city: 'London'
            }
        ]
    },
    {
        state: 'New York',
        country: 'United States of America',
        region: 'diaspora',
        venues: [
            {
                name: 'The Brooklyn Tabernacle',
                address: '17 Smith Street, Brooklyn, NY 11201',
                city: 'New York City'
            },
            {
                name: 'RCCG Jesus House DC',
                address: '939 Elkridge Landing Rd, Linthicum Heights, MD 21090',
                city: 'Baltimore/Washington DC'
            }
        ]
    },
    {
        state: 'Toronto',
        country: 'Canada',
        region: 'diaspora',
        venues: [
            {
                name: 'Toronto Prayer Centre',
                address: '120 Carlton Street, Toronto, ON M5A 2K1',
                city: 'Toronto'
            }
        ]
    },
    {
        state: 'Dubai',
        country: 'United Arab Emirates',
        region: 'diaspora',
        venues: [
            {
                name: 'United Christian Church Dubai',
                address: 'Al Barsha Community Centre, Dubai',
                city: 'Dubai'
            }
        ]
    },
    {
        state: 'Johannesburg',
        country: 'South Africa',
        region: 'diaspora',
        venues: [
            {
                name: 'RCCG Victory House Johannesburg',
                address: '58 Woburn Avenue, Benoni, Gauteng',
                city: 'Johannesburg'
            }
        ]
    }
];