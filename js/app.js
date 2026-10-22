/**
 * High-Fidelity Cineplex Official Website Prototype
 * --------------------------------------------------------------------------
 * Follows the official Cineplex Brand Guide:
 * - Colours: Midnight Blue (#091849), Golden Ticket (#e19617), Emmersion Black (#0a0017)
 * - Typography: Gill Sans / Montserrat (Headlines), Trade Gothic / Roboto Condensed (Subheads)
 * - Tagline: ESCAPE WITH US™
 * - Sub-brands: UltraAVX®, VIP Cinemas, Scotiabank Theatre, Cineplex Odeon, SilverCity
 * - Flow: 7-step interactive checkout with Guest Checkout (no password lock) & Scene+ Member Sign-in
 * --------------------------------------------------------------------------
 */

/* ==========================================================================
   1. BRAND MOCK DATA & FILLER CONTENT
   ========================================================================== */
const MOCK_DATA = {
  movies: [
    {
      id: "mov-1",
      title: "The Odyssey: Beyond Earth",
      rating: "PG-13",
      runtime: "148 min",
      genre: "Sci-Fi / Space Epic",
      formats: ["ultra", "imax"],
      scenePoints: 150,
      synopsis: "A team of interstellar explorers travel through an uncharted cosmic rift in search of a new sanctuary for humanity.",
      svgBg: `
        <svg class="poster-art-svg" viewBox="0 0 300 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nebula1" cx="65%" cy="30%" r="70%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"/>
              <stop offset="45%" stop-color="#1e1b4b" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#050b18" stop-opacity="1"/>
            </radialGradient>
          </defs>
          <rect width="300" height="240" fill="url(#nebula1)"/>
          <circle cx="210" cy="70" r="48" fill="#e0f2fe" opacity="0.9"/>
          <circle cx="210" cy="70" r="54" stroke="#38bdf8" stroke-width="2" fill="none" opacity="0.6"/>
          <!-- Stars -->
          <circle cx="45" cy="40" r="1.5" fill="#ffffff" opacity="0.8"/>
          <circle cx="120" cy="85" r="1.2" fill="#ffffff" opacity="0.7"/>
          <circle cx="90" cy="30" r="2" fill="#e19617" opacity="0.9"/>
          <circle cx="260" cy="140" r="1.5" fill="#ffffff" opacity="0.6"/>
          <circle cx="170" cy="25" r="1" fill="#ffffff" opacity="0.9"/>
          <path d="M-20 220 Q 140 160, 320 210 L 320 240 L -20 240 Z" fill="#091849" opacity="0.95"/>
          <polygon points="150,110 156,128 144,128" fill="#e19617" opacity="0.8"/>
        </svg>
      `
    },
    {
      id: "mov-2",
      title: "The Midnight Heist",
      rating: "14A",
      runtime: "115 min",
      genre: "Action / Crime Noir",
      formats: ["ultra", "vip"],
      scenePoints: 125,
      synopsis: "An elite syndicate orchestrates an intricate museum vault breach during a blackout across metropolitan downtown.",
      svgBg: `
        <svg class="poster-art-svg" viewBox="0 0 300 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="noir1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1e293b"/>
              <stop offset="50%" stop-color="#0f172a"/>
              <stop offset="100%" stop-color="#020617"/>
            </linearGradient>
          </defs>
          <rect width="300" height="240" fill="url(#noir1)"/>
          <!-- City Skyline Silhouette -->
          <rect x="25" y="90" width="30" height="150" fill="#091849" opacity="0.8"/>
          <rect x="65" y="60" width="45" height="180" fill="#071333" opacity="0.9"/>
          <rect x="120" y="110" width="35" height="130" fill="#0b1e4f" opacity="0.75"/>
          <rect x="165" y="45" width="50" height="195" fill="#06102a" opacity="0.95"/>
          <rect x="225" y="80" width="40" height="160" fill="#091849" opacity="0.8"/>
          <!-- Golden Spotlight -->
          <polygon points="190,45 280,240 140,240" fill="#e19617" opacity="0.18"/>
          <circle cx="190" cy="45" r="4" fill="#e19617"/>
        </svg>
      `
    },
    {
      id: "mov-3",
      title: "Silent Horizon",
      rating: "PG",
      runtime: "102 min",
      genre: "Drama / Maritime Mystery",
      formats: ["ultra"],
      scenePoints: 100,
      synopsis: "A coastal lighthouse keeper uncovers long-buried seafaring lore after detecting an enigmatic SOS distress broadcast.",
      svgBg: `
        <svg class="poster-art-svg" viewBox="0 0 300 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ocean1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0e3a53"/>
              <stop offset="60%" stop-color="#082338"/>
              <stop offset="100%" stop-color="#040e17"/>
            </linearGradient>
          </defs>
          <rect width="300" height="240" fill="url(#ocean1)"/>
          <circle cx="230" cy="55" r="28" fill="#f8fafc" opacity="0.85"/>
          <!-- Lighthouse Beam -->
          <polygon points="65,95 300,40 300,130" fill="#e19617" opacity="0.25"/>
          <!-- Lighthouse Tower -->
          <polygon points="60,90 70,90 75,190 55,190" fill="#0a0017"/>
          <rect x="58" y="80" width="14" height="10" fill="#e19617"/>
          <!-- Waves -->
          <path d="M0 190 Q 75 175, 150 190 T 300 190 L 300 240 L 0 240 Z" fill="#051524"/>
        </svg>
      `
    },
    {
      id: "mov-4",
      title: "Cyber Neon: 2099",
      rating: "14A",
      runtime: "130 min",
      genre: "Sci-Fi / Cyberpunk",
      formats: ["ultra", "imax"],
      scenePoints: 150,
      synopsis: "In a rain-drenched neon metropolis, an augmented investigator hunts down a syndicate manipulating collective memories.",
      svgBg: `
        <svg class="poster-art-svg" viewBox="0 0 300 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="cyber1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b0764"/>
              <stop offset="50%" stop-color="#1e1b4b"/>
              <stop offset="100%" stop-color="#030712"/>
            </linearGradient>
          </defs>
          <rect width="300" height="240" fill="url(#cyber1)"/>
          <!-- Grid Perspective -->
          <line x1="0" y1="210" x2="300" y2="210" stroke="#ec4899" stroke-width="1.5" opacity="0.6"/>
          <line x1="0" y1="225" x2="300" y2="225" stroke="#ec4899" stroke-width="1.5" opacity="0.4"/>
          <line x1="150" y1="130" x2="10" y2="240" stroke="#06b6d4" stroke-width="1.2" opacity="0.7"/>
          <line x1="150" y1="130" x2="70" y2="240" stroke="#06b6d4" stroke-width="1.2" opacity="0.7"/>
          <line x1="150" y1="130" x2="230" y2="240" stroke="#06b6d4" stroke-width="1.2" opacity="0.7"/>
          <line x1="150" y1="130" x2="290" y2="240" stroke="#06b6d4" stroke-width="1.2" opacity="0.7"/>
          <circle cx="150" cy="115" r="40" fill="#ec4899" opacity="0.4" filter="blur(8px)"/>
          <circle cx="150" cy="115" r="32" fill="#e19617" opacity="0.85"/>
        </svg>
      `
    },
    {
      id: "mov-5",
      title: "Chronicles of the Wild",
      rating: "G",
      runtime: "95 min",
      genre: "Animation / Family Adventure",
      formats: ["ultra"],
      scenePoints: 100,
      synopsis: "A courageous young fox and a witty golden mountain eagle journey across ancient enchanted Canadian woodlands.",
      svgBg: `
        <svg class="poster-art-svg" viewBox="0 0 300 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="forest1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#064e3b"/>
              <stop offset="60%" stop-color="#022c22"/>
              <stop offset="100%" stop-color="#061a14"/>
            </linearGradient>
          </defs>
          <rect width="300" height="240" fill="url(#forest1)"/>
          <circle cx="150" cy="65" r="42" fill="#fef08a" opacity="0.75"/>
          <!-- Pine Trees Silhouette -->
          <polygon points="50,190 30,240 70,240" fill="#011812"/>
          <polygon points="50,150 25,210 75,210" fill="#03251c"/>
          <polygon points="120,130 90,210 150,210" fill="#022118"/>
          <polygon points="210,140 180,220 240,220" fill="#03281e"/>
          <polygon points="260,160 235,235 285,235" fill="#011812"/>
          <path d="M0 215 Q 150 195, 300 215 L 300 240 L 0 240 Z" fill="#01120d"/>
        </svg>
      `
    },
    {
      id: "mov-6",
      title: "Shadows in the Mist",
      rating: "18A",
      runtime: "108 min",
      genre: "Supernatural Horror",
      formats: ["ultra", "vip"],
      scenePoints: 125,
      synopsis: "An isolated cliffside township is besieged by an ancient apparition that stalks the living whenever dense fog rolls ashore.",
      svgBg: `
        <svg class="poster-art-svg" viewBox="0 0 300 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="horror1" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stop-color="#73160c" stop-opacity="0.8"/>
              <stop offset="60%" stop-color="#1f0707" stop-opacity="0.95"/>
              <stop offset="100%" stop-color="#0a0017" stop-opacity="1"/>
            </radialGradient>
          </defs>
          <rect width="300" height="240" fill="url(#horror1)"/>
          <circle cx="150" cy="80" r="38" fill="#e11d48" opacity="0.3" filter="blur(10px)"/>
          <path d="M110 80 Q 150 40, 190 80 Q 170 140, 150 160 Q 130 140, 110 80 Z" fill="#0a0017" opacity="0.9"/>
          <!-- Glowing Eyes -->
          <circle cx="138" cy="88" r="2.5" fill="#f87171"/>
          <circle cx="162" cy="88" r="2.5" fill="#f87171"/>
          <!-- Fog ribbons -->
          <path d="M0 160 Q 150 180, 300 150 L 300 240 L 0 240 Z" fill="#13080c" opacity="0.85"/>
        </svg>
      `
    },
    {
      id: "mov-7",
      title: "Laughing Matters",
      rating: "PG",
      runtime: "98 min",
      genre: "Romantic Comedy",
      formats: ["vip"],
      scenePoints: 100,
      synopsis: "Two competing stand-up comics get mistakenly double-booked on the same national cross-country theatre tour.",
      svgBg: `
        <svg class="poster-art-svg" viewBox="0 0 300 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="comedy1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#78350f"/>
              <stop offset="50%" stop-color="#3b1904"/>
              <stop offset="100%" stop-color="#0a0017"/>
            </linearGradient>
          </defs>
          <rect width="300" height="240" fill="url(#comedy1)"/>
          <!-- Stage Lighting Beams -->
          <polygon points="60,0 20,240 140,240" fill="#e19617" opacity="0.25"/>
          <polygon points="240,0 160,240 280,240" fill="#f59e0b" opacity="0.2"/>
          <circle cx="150" cy="110" r="16" fill="#fbbf24" opacity="0.8"/>
          <!-- Vintage Mic Stand Silhouette -->
          <rect x="148" y="125" width="4" height="90" fill="#ffffff" opacity="0.8"/>
          <circle cx="150" cy="120" r="8" fill="#e2e8f0"/>
          <ellipse cx="150" cy="215" rx="20" ry="5" fill="#475569"/>
        </svg>
      `
    },
    {
      id: "mov-8",
      title: "Velocity Point",
      rating: "PG-13",
      runtime: "122 min",
      genre: "Action / High-Octane Thriller",
      formats: ["ultra", "imax", "vip"],
      scenePoints: 150,
      synopsis: "A retired precision stunt driver infiltrates a high-stakes underground racing circuit operating across Canadian expressways.",
      svgBg: `
        <svg class="poster-art-svg" viewBox="0 0 300 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="velocity1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1e3a8a"/>
              <stop offset="50%" stop-color="#172554"/>
              <stop offset="100%" stop-color="#030712"/>
            </linearGradient>
          </defs>
          <rect width="300" height="240" fill="url(#velocity1)"/>
          <!-- Speed Light Streaks -->
          <line x1="-20" y1="70" x2="320" y2="120" stroke="#ef4444" stroke-width="4" opacity="0.8"/>
          <line x1="-20" y1="85" x2="320" y2="135" stroke="#ef4444" stroke-width="2" opacity="0.6"/>
          <line x1="-20" y1="150" x2="320" y2="90" stroke="#e19617" stroke-width="4" opacity="0.9"/>
          <line x1="-20" y1="165" x2="320" y2="105" stroke="#fbbf24" stroke-width="2" opacity="0.6"/>
          <line x1="-20" y1="190" x2="320" y2="175" stroke="#38bdf8" stroke-width="3" opacity="0.7"/>
          <polygon points="120,110 180,95 200,140 100,135" fill="#091849" opacity="0.95"/>
        </svg>
      `
    }
  ],

  // Official Brand Guide Cineplex Theatres (Pages 20-32)
  theatres: [
    {
      id: "th-1",
      name: "Scotiabank Theatre Toronto",
      address: "259 Richmond St W, Toronto, ON",
      distance: "1.2 km away",
      subBrand: "Scotiabank Theatre",
      amenities: ["UltraAVX®", "IMAX® Laser", "D-BOX®", "Dolby Atmos®"]
    },
    {
      id: "th-2",
      name: "Cineplex Cinemas Yonge-Dundas and VIP",
      address: "10 Dundas St E, Toronto, ON",
      distance: "2.8 km away",
      subBrand: "VIP Cinemas",
      amenities: ["VIP Cinemas 19+", "UltraAVX®", "Reserved Recliners", "Licensed Lounge"]
    },
    {
      id: "th-3",
      name: "Cineplex Odeon Queensway and VIP",
      address: "1025 The Queensway, Etobicoke, ON",
      distance: "9.4 km away",
      subBrand: "Cineplex Odeon",
      amenities: ["VIP Cinemas 19+", "UltraAVX®", "Dolby Atmos®", "Party Rooms"]
    },
    {
      id: "th-4",
      name: "SilverCity Richmond Hill Cinemas",
      address: "8725 Yonge St, Richmond Hill, ON",
      distance: "16.5 km away",
      subBrand: "SilverCity",
      amenities: ["UltraAVX®", "XSCAPE Entertainment Centre", "Standard Digital"]
    }
  ],

  dates: [
    { id: "d-1", label: "Today, Oct 15" },
    { id: "d-2", label: "Tomorrow, Oct 16" },
    { id: "d-3", label: "Saturday, Oct 17" },
    { id: "d-4", label: "Sunday, Oct 18" }
  ],

  showtimes: [
    {
      format: "UltraAVX® (Dolby Atmos® Sound & Luxury Recliners)",
      times: ["1:15 PM", "4:30 PM", "7:15 PM", "10:15 PM"]
    },
    {
      format: "IMAX® (Laser Projection & 12-Channel Sound)",
      times: ["2:00 PM", "5:30 PM", "8:45 PM"]
    },
    {
      format: "VIP Cinemas (19+ In-Seat Dining & Full Bar)",
      times: ["3:45 PM", "7:00 PM", "9:50 PM"]
    },
    {
      format: "Standard Digital (RealD 3D Capable)",
      times: ["12:30 PM", "3:15 PM", "6:15 PM", "9:15 PM"]
    }
  ],

  // Seat layout configuration: 6 rows (A-F), 8 seats each, with realistic reserved recliners
  seatGrid: {
    rows: ["A", "B", "C", "D", "E", "F"],
    seatsPerRow: 8,
    occupied: ["B3", "B4", "C6", "D4", "D5", "E2"]
  },

  // Available Ticket Categories
  ticketTypes: [
    {
      id: "general",
      name: "General Admission",
      desc: "Ages 14-64 &bull; Earn 100 Scene+ pts",
      price: 15.50,
      defaultQty: 2
    },
    {
      id: "child",
      name: "Child",
      desc: "Ages 3-13 &bull; Family Pricing",
      price: 9.75,
      defaultQty: 0
    },
    {
      id: "senior",
      name: "Senior",
      desc: "Ages 65+ &bull; ID may be requested",
      price: 11.25,
      defaultQty: 0
    },
    {
      id: "student",
      name: "Post-Secondary Student",
      desc: "Valid Student ID required at podium",
      price: 12.50,
      defaultQty: 0
    }
  ],

  pricing: {
    bookingFee: 1.50,
    taxRate: 0.13,
    sceneDiscountValue: 10.00
  },

  // Prototype Mock Filler Cards (Mid-Fidelity Prototype)
  fillerCards: {
    credit: {
      name: "Christopher Alex",
      number: "4500 1234 5678 9012",
      masked: "4500 •••• •••• 9012",
      last4: "9012",
      expiry: "12/28",
      cvv: "123",
      brand: "Visa",
      type: "Credit Card"
    },
    debit: {
      name: "Christopher Alex",
      number: "4724 8812 3456 7890",
      masked: "4724 •••• •••• 7890",
      last4: "7890",
      bank: "TD Canada Trust",
      expiry: "09/27",
      cvv: "456",
      brand: "Interac Debit",
      type: "Debit Card"
    }
  }
};

/* ==========================================================================
   2. SELF-CONTAINED APPLICATION STATE
   ========================================================================== */
const state = {
  currentStep: 1,
  totalSteps: 7,

  // Selected values
  selectedMovie: null,
  selectedTheatre: null,
  selectedDate: MOCK_DATA.dates[0].label,
  selectedFormat: MOCK_DATA.showtimes[0].format,
  selectedShowtime: null,

  // Format filter on Step 1
  activeFormatFilter: "all",

  // Ticket quantities by category
  ticketSelection: {
    general: 2,
    child: 0,
    senior: 0,
    student: 0
  },

  // Picked seat coordinates (e.g. ["D3", "D4"])
  selectedSeats: [],

  // Checkout Mode: "guest" (default, no password/lock) vs "signin"
  checkoutMode: "guest",

  // Scene+ points redemption applied?
  redeemSceneDiscount: false,

  // User credentials & ticket delivery address
  user: {
    isLoggedIn: false,
    isGuest: true,
    email: "you@email.com"
  },

  // Step 6: Payment Method & Added Cards (Allows adding both Credit & Debit)
  paymentMethod: "credit", // "credit", "debit", or "split"
  addedCards: {
    credit: {
      name: "Christopher Alex",
      number: "4500 1234 5678 9012",
      masked: "4500 •••• •••• 9012",
      last4: "9012",
      expiry: "12/28",
      cvv: "123",
      brand: "Visa",
      isAdded: true
    },
    debit: {
      name: "Christopher Alex",
      number: "4724 8812 3456 7890",
      masked: "4724 •••• •••• 7890",
      last4: "7890",
      bank: "TD Canada Trust",
      expiry: "09/27",
      cvv: "456",
      brand: "Interac Debit",
      isAdded: true
    }
  },
  splitDebitAmount: 20.00,
  splitCreditAmount: 0,

  payment: {
    type: "Credit Card",
    brand: "Visa",
    name: "Christopher Alex",
    cardNumber: "4500 •••• •••• 9012",
    expiry: "12/28"
  },

  orderNumber: null
};

/* ==========================================================================
   3. DOM ELEMENT REFERENCES
   ========================================================================== */
const elements = {
  // Navigation
  btnBack: document.getElementById("btn-back"),
  btnNext: document.getElementById("btn-next"),
  navValidationMsg: document.getElementById("nav-validation-msg"),
  selectionSummaryBar: document.getElementById("selection-summary-bar"),
  summaryContent: document.getElementById("summary-content"),

  // Screens
  panels: {
    1: document.getElementById("screen-step-1"),
    2: document.getElementById("screen-step-2"),
    3: document.getElementById("screen-step-3"),
    4: document.getElementById("screen-step-4"),
    5: document.getElementById("screen-step-5"),
    6: document.getElementById("screen-step-6"),
    7: document.getElementById("screen-step-7")
  },

  stepIndicators: document.querySelectorAll(".step-item"),

  // Step 1: Movies
  movieListContainer: document.getElementById("movie-list-container"),

  // Step 2: Theatres
  theatreListContainer: document.getElementById("theatre-list-container"),

  // Step 3: Showtimes
  dateTabsContainer: document.getElementById("date-tabs-container"),
  showtimesContainer: document.getElementById("showtimes-container"),

  // Step 4: Tickets, Seats & Preview Card
  ticketTypesContainer: document.getElementById("ticket-types-container"),
  totalTicketsBadge: document.getElementById("total-tickets-badge"),
  legendSelectedLabel: document.getElementById("legend-selected-label"),
  stepperSeatsTitle: document.getElementById("stepper-seats-title"),
  seatGridContainer: document.getElementById("seat-grid-container"),
  seatCountStatus: document.getElementById("seat-count-status"),
  seatCheckoutSummaryCard: document.getElementById("seat-checkout-summary-card"),
  seatCardMovieTitle: document.getElementById("seat-card-movie-title"),
  seatCardDetails: document.getElementById("seat-card-details"),
  seatCardDatetime: document.getElementById("seat-card-datetime"),
  seatCardSeats: document.getElementById("seat-card-seats"),
  btnProceedToCheckout: document.getElementById("btn-proceed-to-checkout"),

  // Step 5: Checkout Options (Guest vs Sign In)
  radioModeGuest: document.getElementById("radio-mode-guest"),
  radioModeSignin: document.getElementById("radio-mode-signin"),
  cardModeGuest: document.getElementById("card-mode-guest"),
  cardModeSignin: document.getElementById("card-mode-signin"),
  panelGuestMode: document.getElementById("panel-guest-mode"),
  panelSigninMode: document.getElementById("panel-signin-mode"),
  guestCheckoutForm: document.getElementById("guest-checkout-form"),
  guestEmailInput: document.getElementById("guest-email"),
  guestErrorMsg: document.getElementById("guest-error-msg"),
  loginForm: document.getElementById("login-form"),
  loginEmailInput: document.getElementById("login-email"),
  loginPasswordInput: document.getElementById("login-password"),
  loginErrorMsg: document.getElementById("login-error-msg"),

  // Step 6: Payment Methods & Controls
  btnApplePay: document.getElementById("btn-apple-pay"),
  btnGooglePay: document.getElementById("btn-google-pay"),
  btnCreditPay: document.getElementById("btn-credit-pay"),
  btnDebitPay: document.getElementById("btn-debit-pay"),
  chkRedeemScene: document.getElementById("chk-redeem-scene"),

  // Payment Option Radios & Cards
  radioPayCredit: document.getElementById("radio-pay-credit"),
  radioPayDebit: document.getElementById("radio-pay-debit"),
  radioPaySplit: document.getElementById("radio-pay-split"),
  cardMethodCredit: document.getElementById("card-method-credit"),
  cardMethodDebit: document.getElementById("card-method-debit"),
  cardMethodSplit: document.getElementById("card-method-split"),

  // Added Cards Display Elements
  tileCreditCard: document.getElementById("tile-credit-card"),
  tileDebitCard: document.getElementById("tile-debit-card"),
  creditCardNumberDisplay: document.getElementById("credit-card-number-display"),
  creditCardHolderDisplay: document.getElementById("credit-card-holder-display"),
  creditCardExpDisplay: document.getElementById("credit-card-exp-display"),
  creditCardBadge: document.getElementById("credit-card-badge"),
  creditStatusText: document.getElementById("credit-status-text"),
  debitCardNumberDisplay: document.getElementById("debit-card-number-display"),
  debitCardHolderDisplay: document.getElementById("debit-card-holder-display"),
  debitCardExpDisplay: document.getElementById("debit-card-exp-display"),
  debitCardBadge: document.getElementById("debit-card-badge"),
  debitStatusText: document.getElementById("debit-status-text"),

  // Card Management Buttons
  btnShowAddCredit: document.getElementById("btn-show-add-credit"),
  btnShowAddDebit: document.getElementById("btn-show-add-debit"),
  btnEditCreditCard: document.getElementById("btn-edit-credit-card"),
  btnEditDebitCard: document.getElementById("btn-edit-debit-card"),
  btnPrefillMockCards: document.getElementById("btn-prefill-mock-cards"),

  // Form Sections & Inputs
  sectionCreditForm: document.getElementById("section-credit-form"),
  sectionDebitForm: document.getElementById("section-debit-form"),
  sectionSplitForm: document.getElementById("section-split-form"),

  creditCardForm: document.getElementById("credit-card-form"),
  creditCardName: document.getElementById("credit-card-name"),
  creditCardNumber: document.getElementById("credit-card-number"),
  creditCardExpiry: document.getElementById("credit-card-expiry"),
  creditCardCvv: document.getElementById("credit-card-cvv"),
  btnSaveCreditCard: document.getElementById("btn-save-credit-card"),

  debitCardForm: document.getElementById("debit-card-form"),
  debitCardName: document.getElementById("debit-card-name"),
  debitCardNumber: document.getElementById("debit-card-number"),
  debitBankName: document.getElementById("debit-bank-name"),
  debitCardExpiry: document.getElementById("debit-card-expiry"),
  debitCardCvv: document.getElementById("debit-card-cvv"),
  btnSaveDebitCard: document.getElementById("btn-save-debit-card"),

  // Split Payment Elements
  splitDebitInput: document.getElementById("split-debit-input"),
  splitCreditAmountDisplay: document.getElementById("split-credit-amount-display"),
  splitPresetButtons: document.querySelectorAll(".btn-split-preset"),

  // Master Payment Form & Action Button
  paymentForm: document.getElementById("payment-form"),
  btnMainPay: document.getElementById("btn-main-pay"),
  orderSummaryDetails: document.getElementById("order-summary-details"),

  // Step 7: Confirmation
  confirmEmailDisplay: document.getElementById("confirm-email-display"),
  confirmationDetails: document.getElementById("confirmation-details"),
  btnStartOver: document.getElementById("btn-start-over")
};

/* ==========================================================================
   4. RENDERERS & UI POPULATION
   ========================================================================== */

/**
 * Step 1: Render High-Fidelity Movie Cards with Rich Poster Artwork
 */
function renderMovies() {
  if (!elements.movieListContainer) return;
  elements.movieListContainer.innerHTML = "";

  const filter = state.activeFormatFilter;
  const filteredMovies = MOCK_DATA.movies.filter((movie) => {
    if (filter === "all") return true;
    return movie.formats.includes(filter);
  });

  filteredMovies.forEach((movie) => {
    const isSelected = state.selectedMovie && state.selectedMovie.id === movie.id;
    const card = document.createElement("article");
    card.className = `movie-card ${isSelected ? "selected" : ""}`;
    card.setAttribute("data-id", movie.id);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-pressed", isSelected ? "true" : "false");

    // Format chips
    const formatChipsHtml = movie.formats
      .map((fmt) => {
        if (fmt === "ultra") return `<span class="format-chip ultra">UltraAVX®</span>`;
        if (fmt === "imax") return `<span class="format-chip imax">IMAX®</span>`;
        if (fmt === "vip") return `<span class="format-chip vip">VIP 19+</span>`;
        return "";
      })
      .join("");

    card.innerHTML = `
      <div class="poster-art-box">
        ${movie.svgBg}
        <div class="poster-badges">
          <span class="rating-badge">${movie.rating}</span>
          <span class="scene-earn-tag">&#9733; +${movie.scenePoints} pts</span>
        </div>
        <div class="poster-title-overlay">
          <h3>${movie.title}</h3>
        </div>
      </div>
      <div class="movie-card-body">
        <div class="movie-meta-chips">
          <span class="meta-chip">${movie.genre}</span>
          <span class="meta-chip">${movie.runtime}</span>
        </div>
        <div class="format-chip-row">
          ${formatChipsHtml}
        </div>
        <p class="movie-synopsis">${movie.synopsis}</p>
        <div class="select-btn-ghost">
          ${isSelected ? "&#10003; Selected Movie" : "Select Movie &amp; Showtimes"}
        </div>
      </div>
    `;

    const selectThisMovie = () => {
      state.selectedMovie = movie;
      renderMovies();
      updateSelectionSummary();
      updateNavigationControls();
    };

    card.addEventListener("click", selectThisMovie);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectThisMovie();
      }
    });

    elements.movieListContainer.appendChild(card);
  });
}

/**
 * Step 2: Render Official Cineplex Theatre Cards
 */
function renderTheatres() {
  if (!elements.theatreListContainer) return;
  elements.theatreListContainer.innerHTML = "";

  MOCK_DATA.theatres.forEach((theatre) => {
    const isSelected = state.selectedTheatre && state.selectedTheatre.id === theatre.id;
    const card = document.createElement("div");
    card.className = `theatre-card ${isSelected ? "selected" : ""}`;
    card.setAttribute("data-id", theatre.id);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    const amenitiesHtml = theatre.amenities
      .map((item) => `<span class="meta-tag">${item}</span>`)
      .join(" ");

    card.innerHTML = `
      <div class="theatre-info">
        <div style="font-size: 0.72rem; font-family: var(--font-condensed); font-weight: 700; color: var(--cp-gold); letter-spacing: 0.1em; text-transform: uppercase;">
          ${theatre.subBrand}
        </div>
        <h3>${theatre.name}</h3>
        <p>${theatre.address} &bull; <strong>${theatre.distance}</strong></p>
        <div class="theatre-amenities">${amenitiesHtml}</div>
      </div>
      <div class="theatre-select-indicator"></div>
    `;

    const selectThisTheatre = () => {
      state.selectedTheatre = theatre;
      renderTheatres();
      updateSelectionSummary();
      updateNavigationControls();
    };

    card.addEventListener("click", selectThisTheatre);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectThisTheatre();
      }
    });

    elements.theatreListContainer.appendChild(card);
  });
}

/**
 * Step 3: Render Date Tabs and Showtime Chips
 */
function renderShowtimes() {
  // Render Date Tabs
  if (elements.dateTabsContainer) {
    elements.dateTabsContainer.innerHTML = "";
    MOCK_DATA.dates.forEach((dateObj) => {
      const isTabActive = state.selectedDate === dateObj.label;
      const tabBtn = document.createElement("button");
      tabBtn.type = "button";
      tabBtn.className = `date-tab ${isTabActive ? "active" : ""}`;
      tabBtn.textContent = dateObj.label;

      tabBtn.addEventListener("click", () => {
        state.selectedDate = dateObj.label;
        renderShowtimes();
        updateSelectionSummary();
      });

      elements.dateTabsContainer.appendChild(tabBtn);
    });
  }

  // Render Time Slot Categories
  if (elements.showtimesContainer) {
    elements.showtimesContainer.innerHTML = "";
    MOCK_DATA.showtimes.forEach((group) => {
      const formatBlock = document.createElement("div");
      formatBlock.className = "format-block";

      const title = document.createElement("div");
      title.className = "format-label";
      title.innerHTML = `
        <span>${group.format}</span>
        <span class="badge-tag free">Reserved Seating</span>
      `;
      formatBlock.appendChild(title);

      const timeRow = document.createElement("div");
      timeRow.className = "time-slots-row";

      group.times.forEach((timeStr) => {
        const isSelected =
          state.selectedShowtime === timeStr && state.selectedFormat === group.format;

        const timeBtn = document.createElement("button");
        timeBtn.type = "button";
        timeBtn.className = `time-slot-btn ${isSelected ? "selected" : ""}`;
        timeBtn.textContent = timeStr;

        timeBtn.addEventListener("click", () => {
          state.selectedFormat = group.format;
          state.selectedShowtime = timeStr;
          renderShowtimes();
          updateSelectionSummary();
          updateNavigationControls();
        });

        timeRow.appendChild(timeBtn);
      });

      formatBlock.appendChild(timeRow);
      elements.showtimesContainer.appendChild(formatBlock);
    });
  }
}

/**
 * Calculate total tickets currently selected
 */
function getTotalTicketCount() {
  return Object.values(state.ticketSelection).reduce((sum, qty) => sum + qty, 0);
}

/**
 * Step 4: Render Ticket Type Category Cards (General, Child, Senior, Student)
 */
function renderTicketTypes() {
  if (!elements.ticketTypesContainer) return;
  elements.ticketTypesContainer.innerHTML = "";

  const totalTickets = getTotalTicketCount();
  if (elements.totalTicketsBadge) {
    elements.totalTicketsBadge.textContent = `${totalTickets} Ticket${totalTickets === 1 ? "" : "s"} Selected`;
  }
  if (elements.stepperSeatsTitle) {
    elements.stepperSeatsTitle.textContent = `Seats (${totalTickets})`;
  }
  if (elements.legendSelectedLabel) {
    elements.legendSelectedLabel.textContent = `Selected (${totalTickets} max)`;
  }

  MOCK_DATA.ticketTypes.forEach((ticket) => {
    const qty = state.ticketSelection[ticket.id] || 0;
    const card = document.createElement("div");
    card.className = `ticket-type-card ${qty > 0 ? "active" : ""}`;

    card.innerHTML = `
      <div class="ticket-type-info">
        <div class="ticket-type-name">${ticket.name}</div>
        <div class="ticket-type-desc">${ticket.desc}</div>
        <div class="ticket-type-price">$${ticket.price.toFixed(2)} ea</div>
      </div>
      <div class="ticket-counter">
        <button type="button" class="btn-qty btn-qty-minus" aria-label="Decrease ${ticket.name}" ${qty <= 0 ? "disabled" : ""}>&minus;</button>
        <span class="qty-count">${qty}</span>
        <button type="button" class="btn-qty btn-qty-plus" aria-label="Increase ${ticket.name}" ${totalTickets >= 8 ? "disabled" : ""}>&#43;</button>
      </div>
    `;

    // Minus button handler
    card.querySelector(".btn-qty-minus").addEventListener("click", () => {
      if (state.ticketSelection[ticket.id] > 0) {
        state.ticketSelection[ticket.id]--;
        onTicketQuantityChanged();
      }
    });

    // Plus button handler
    card.querySelector(".btn-qty-plus").addEventListener("click", () => {
      if (getTotalTicketCount() < 8) {
        state.ticketSelection[ticket.id]++;
        onTicketQuantityChanged();
      }
    });

    elements.ticketTypesContainer.appendChild(card);
  });
}

/**
 * Handle changes to ticket quantities
 */
function onTicketQuantityChanged() {
  const newTotal = getTotalTicketCount();

  // If currently selected seats exceed new total tickets, trim excess from end
  if (state.selectedSeats.length > newTotal) {
    state.selectedSeats = state.selectedSeats.slice(0, newTotal);
  }

  renderTicketTypes();
  renderSeatGrid();
  updateSeatStatusText();
  updateSelectionSummary();
  updateNavigationControls();
}

/**
 * Step 4: Render Interactive Cinema Seating Grid
 */
function renderSeatGrid() {
  if (!elements.seatGridContainer) return;
  elements.seatGridContainer.innerHTML = "";

  MOCK_DATA.seatGrid.rows.forEach((rowLetter) => {
    const rowEl = document.createElement("div");
    rowEl.className = "seat-row";

    const labelLeft = document.createElement("div");
    labelLeft.className = "row-label";
    labelLeft.textContent = rowLetter;
    rowEl.appendChild(labelLeft);

    const seatsContainer = document.createElement("div");
    seatsContainer.className = "seats-in-row";

    for (let seatNum = 1; seatNum <= MOCK_DATA.seatGrid.seatsPerRow; seatNum++) {
      // Add aisle gap in the middle (between seat 4 and 5)
      if (seatNum === 5) {
        const aisleGap = document.createElement("div");
        aisleGap.className = "seat-aisle-gap";
        seatsContainer.appendChild(aisleGap);
      }

      const seatCode = `${rowLetter}${seatNum}`;
      const isOccupied = MOCK_DATA.seatGrid.occupied.includes(seatCode);
      const isSelected = state.selectedSeats.includes(seatCode);

      const seatBtn = document.createElement("button");
      seatBtn.type = "button";
      seatBtn.className = `seat-btn ${isOccupied ? "occupied" : ""} ${isSelected ? "selected" : ""}`;
      seatBtn.textContent = seatCode;
      seatBtn.disabled = isOccupied;
      seatBtn.setAttribute("aria-label", `Seat ${seatCode} ${isOccupied ? "Occupied" : isSelected ? "Selected" : "Available"}`);

      if (!isOccupied) {
        seatBtn.addEventListener("click", () => {
          handleSeatClick(seatCode);
        });
      }

      seatsContainer.appendChild(seatBtn);
    }

    rowEl.appendChild(seatsContainer);

    const labelRight = document.createElement("div");
    labelRight.className = "row-label";
    labelRight.textContent = rowLetter;
    rowEl.appendChild(labelRight);

    elements.seatGridContainer.appendChild(rowEl);
  });

  updateSeatStatusText();
}

/**
 * Seat Click Handler: Enforces exact seat match to total tickets
 */
function handleSeatClick(seatCode) {
  const maxSeats = getTotalTicketCount();

  if (maxSeats === 0) {
    alert("Please select at least 1 ticket type above first.");
    return;
  }

  const index = state.selectedSeats.indexOf(seatCode);

  if (index > -1) {
    // Already selected -> unselect
    state.selectedSeats.splice(index, 1);
  } else {
    // If maximum reached, replace the oldest selected seat
    if (state.selectedSeats.length >= maxSeats) {
      state.selectedSeats.shift();
    }
    state.selectedSeats.push(seatCode);
  }

  renderSeatGrid();
  updateSelectionSummary();
  updateNavigationControls();
}

/**
 * Update seat selection status prompt & preview card
 */
function updateSeatStatusText() {
  const totalTickets = getTotalTicketCount();
  const selectedCount = state.selectedSeats.length;

  if (totalTickets === 0) {
    if (elements.seatCountStatus) {
      elements.seatCountStatus.innerHTML = "Please select at least <strong>1 ticket</strong> above.";
    }
    if (elements.seatCheckoutSummaryCard) {
      elements.seatCheckoutSummaryCard.style.display = "none";
    }
    return;
  }

  if (selectedCount < totalTickets) {
    const remaining = totalTickets - selectedCount;
    if (elements.seatCountStatus) {
      elements.seatCountStatus.innerHTML = `Selected <strong>${selectedCount} of ${totalTickets} seats</strong>. Please select <strong>${remaining} more seat${remaining > 1 ? "s" : ""}</strong> on the map.`;
    }
    if (elements.seatCheckoutSummaryCard) {
      elements.seatCheckoutSummaryCard.style.display = "none";
    }
  } else {
    if (elements.seatCountStatus) {
      elements.seatCountStatus.innerHTML = `Selected ${totalTickets} reserved seat${totalTickets > 1 ? "s" : ""}: <strong>${state.selectedSeats.join(", ")}</strong>. Sightlines locked!`;
    }

    // Populate and show Preview Card
    if (elements.seatCheckoutSummaryCard) {
      elements.seatCheckoutSummaryCard.style.display = "flex";
      if (state.selectedMovie) {
        elements.seatCardMovieTitle.textContent = state.selectedMovie.title;
        elements.seatCardDetails.textContent = `${state.selectedMovie.rating} \u2022 ${state.selectedMovie.runtime} \u2022 ${state.selectedMovie.genre}`;
      }
      elements.seatCardDatetime.textContent = `${state.selectedDate} \u2022 ${state.selectedShowtime || "7:15 PM"}`;
      elements.seatCardSeats.textContent = `Seats: ${state.selectedSeats.join(", ")} (${totalTickets} Ticket${totalTickets > 1 ? "s" : ""})`;
    }
  }
}

/**
 * Helper: Calculate current order pricing totals
 */
function calculateOrderTotal() {
  let subtotal = 0;
  MOCK_DATA.ticketTypes.forEach((type) => {
    const qty = state.ticketSelection[type.id] || 0;
    if (qty > 0) {
      subtotal += qty * type.price;
    }
  });

  const bookingFee = MOCK_DATA.pricing.bookingFee;
  const sceneDiscount = state.redeemSceneDiscount ? MOCK_DATA.pricing.sceneDiscountValue : 0;
  const taxableBase = Math.max(0, subtotal + bookingFee - sceneDiscount);
  const taxes = taxableBase * MOCK_DATA.pricing.taxRate;
  const total = taxableBase + taxes;

  return {
    subtotal,
    bookingFee,
    sceneDiscount,
    taxes,
    total
  };
}

/**
 * Step 6: Switch active payment method (credit, debit, split)
 */
function setPaymentMethod(method) {
  state.paymentMethod = method;

  if (elements.radioPayCredit) elements.radioPayCredit.checked = (method === "credit");
  if (elements.radioPayDebit) elements.radioPayDebit.checked = (method === "debit");
  if (elements.radioPaySplit) elements.radioPaySplit.checked = (method === "split");

  if (elements.cardMethodCredit) elements.cardMethodCredit.classList.toggle("active", method === "credit");
  if (elements.cardMethodDebit) elements.cardMethodDebit.classList.toggle("active", method === "debit");
  if (elements.cardMethodSplit) elements.cardMethodSplit.classList.toggle("active", method === "split");

  if (elements.tileCreditCard) elements.tileCreditCard.classList.toggle("active", method === "credit" || method === "split");
  if (elements.tileDebitCard) elements.tileDebitCard.classList.toggle("active", method === "debit" || method === "split");

  if (elements.sectionCreditForm) elements.sectionCreditForm.style.display = (method === "credit") ? "block" : "none";
  if (elements.sectionDebitForm) elements.sectionDebitForm.style.display = (method === "debit") ? "block" : "none";
  if (elements.sectionSplitForm) elements.sectionSplitForm.style.display = (method === "split") ? "block" : "none";

  updateSplitCalculation();
  updatePaymentButtonText();
}

/**
 * Step 6: Update Added Cards visual overview (Credit & Debit)
 */
function updateAddedCardsUI() {
  const c = state.addedCards.credit;
  const d = state.addedCards.debit;

  if (elements.creditCardNumberDisplay) elements.creditCardNumberDisplay.textContent = c.masked || c.number;
  if (elements.creditCardHolderDisplay) elements.creditCardHolderDisplay.textContent = c.name;
  if (elements.creditCardExpDisplay) elements.creditCardExpDisplay.textContent = `Exp: ${c.expiry}`;
  if (elements.creditCardBadge) elements.creditCardBadge.textContent = c.brand || "Credit Card";
  if (elements.creditStatusText) elements.creditStatusText.textContent = c.isAdded ? "✓ Added (Ready)" : "Not added";

  if (elements.debitCardNumberDisplay) elements.debitCardNumberDisplay.textContent = d.masked || d.number;
  if (elements.debitCardHolderDisplay) elements.debitCardHolderDisplay.textContent = `${d.name} (${d.bank || "Interac"})`;
  if (elements.debitCardExpDisplay) elements.debitCardExpDisplay.textContent = `Exp: ${d.expiry}`;
  if (elements.debitCardBadge) elements.debitCardBadge.textContent = d.brand || "Debit Card";
  if (elements.debitStatusText) elements.debitStatusText.textContent = d.isAdded ? "✓ Added (Ready)" : "Not added";
}

/**
 * Step 6: Update Split Payment calculator amounts
 */
function updateSplitCalculation() {
  const { total } = calculateOrderTotal();
  let debitVal = parseFloat(elements.splitDebitInput ? elements.splitDebitInput.value : state.splitDebitAmount);

  if (isNaN(debitVal) || debitVal < 0) debitVal = 0;
  if (debitVal > total) debitVal = total;
  state.splitDebitAmount = debitVal;

  const remainder = Math.max(0, total - debitVal);
  state.splitCreditAmount = remainder;

  if (elements.splitCreditAmountDisplay) {
    elements.splitCreditAmountDisplay.textContent = `$${remainder.toFixed(2)} CAD`;
  }

  updatePaymentButtonText();
}

/**
 * Step 6: Update action button labels according to selected payment method
 */
function updatePaymentButtonText() {
  const { total } = calculateOrderTotal();
  const totalFormatted = `$${total.toFixed(2)} CAD`;

  if (elements.btnMainPay) {
    if (state.paymentMethod === "credit") {
      const cardEnd = (state.addedCards.credit.number || "9012").slice(-4);
      elements.btnMainPay.innerHTML = `Pay ${totalFormatted} with Credit Card (Visa &bull;&bull;&bull;&bull; ${cardEnd}) &rarr;`;
    } else if (state.paymentMethod === "debit") {
      const cardEnd = (state.addedCards.debit.number || "7890").slice(-4);
      elements.btnMainPay.innerHTML = `Pay ${totalFormatted} with Debit Card (Interac &bull;&bull;&bull;&bull; ${cardEnd}) &rarr;`;
    } else if (state.paymentMethod === "split") {
      const debitVal = state.splitDebitAmount || 0;
      const creditVal = state.splitCreditAmount !== undefined ? state.splitCreditAmount : Math.max(0, total - debitVal);
      elements.btnMainPay.innerHTML = `Pay ${totalFormatted} with Both (Debit: $${debitVal.toFixed(2)} + Credit: $${creditVal.toFixed(2)}) &rarr;`;
    }
  }

  if (elements.btnNext && state.currentStep === 6) {
    if (state.paymentMethod === "credit") {
      elements.btnNext.textContent = `Authorize Credit Card Payment (${totalFormatted}) \u2192`;
    } else if (state.paymentMethod === "debit") {
      elements.btnNext.textContent = `Authorize Debit Card Payment (${totalFormatted}) \u2192`;
    } else if (state.paymentMethod === "split") {
      elements.btnNext.textContent = `Authorize Split Payment (${totalFormatted}) \u2192`;
    }
  }
}

/**
 * Step 6: Render Order Summary in Payment Screen
 */
function renderOrderSummary() {
  if (!elements.orderSummaryDetails) return;
  const numTickets = state.selectedSeats.length;

  let subtotal = 0;
  const ticketLines = [];

  MOCK_DATA.ticketTypes.forEach((type) => {
    const qty = state.ticketSelection[type.id] || 0;
    if (qty > 0) {
      const lineCost = qty * type.price;
      subtotal += lineCost;
      ticketLines.push(`
        <div class="order-detail-line muted">
          <span>${qty} &times; ${type.name} ($${type.price.toFixed(2)}):</span>
          <span>$${lineCost.toFixed(2)}</span>
        </div>
      `);
    }
  });

  const { bookingFee, sceneDiscount, taxes, total } = calculateOrderTotal();

  let discountLineHtml = "";
  if (state.redeemSceneDiscount) {
    discountLineHtml = `
      <div class="order-detail-line" style="color: #22c55e;">
        <span>Scene+ Points Redemption:</span>
        <strong>-$${sceneDiscount.toFixed(2)}</strong>
      </div>
    `;
  }

  // Payment method badge in summary
  let paymentMethodSummary = "Credit Card (Visa)";
  if (state.paymentMethod === "debit") {
    paymentMethodSummary = "Debit Card (Interac)";
  } else if (state.paymentMethod === "split") {
    paymentMethodSummary = "Split (Debit + Credit)";
  }

  elements.orderSummaryDetails.innerHTML = `
    <div class="order-detail-line">
      <span>Feature Film:</span>
      <strong>${state.selectedMovie ? state.selectedMovie.title : "Not selected"}</strong>
    </div>
    <div class="order-detail-line">
      <span>Cinema Location:</span>
      <strong>${state.selectedTheatre ? state.selectedTheatre.name : "Not selected"}</strong>
    </div>
    <div class="order-detail-line">
      <span>Date &amp; Showtime:</span>
      <strong>${state.selectedDate} @ ${state.selectedShowtime || "N/A"}</strong>
    </div>
    <div class="order-detail-line">
      <span>Experience:</span>
      <strong style="color: var(--cp-gold);">${state.selectedFormat}</strong>
    </div>
    <div class="order-detail-line">
      <span>Reserved Seats (${numTickets}):</span>
      <strong>${state.selectedSeats.join(", ") || "None"}</strong>
    </div>
    <div class="order-detail-line">
      <span>Ticket Holder:</span>
      <strong>${state.user.email} (${state.user.isGuest ? "Guest" : "Scene+ Member"})</strong>
    </div>
    <div class="order-detail-line">
      <span>Payment Selection:</span>
      <strong style="color: var(--cp-gold);">${paymentMethodSummary}</strong>
    </div>

    <div class="order-detail-divider"></div>

    ${ticketLines.join("")}
    <div class="order-detail-line muted">
      <span>Online Booking Fee:</span>
      <span>$${bookingFee.toFixed(2)}</span>
    </div>
    ${discountLineHtml}
    <div class="order-detail-line muted">
      <span>HST / Taxes (13%):</span>
      <span>$${taxes.toFixed(2)}</span>
    </div>

    <div class="order-detail-divider"></div>

    <div class="order-detail-total">
      <span>Total CAD:</span>
      <span>$${total.toFixed(2)}</span>
    </div>
  `;

  updateSplitCalculation();
  updatePaymentButtonText();
}

/**
 * Step 7: Render Official Cineplex Pass & Confirmation Barcode
 */
function renderConfirmation() {
  if (!state.orderNumber) {
    state.orderNumber = "CPX-" + Math.floor(100000 + Math.random() * 900000);
  }

  if (elements.confirmEmailDisplay) {
    elements.confirmEmailDisplay.textContent = state.user.email;
  }

  let subtotal = 0;
  const ticketSummaryItems = [];

  MOCK_DATA.ticketTypes.forEach((type) => {
    const qty = state.ticketSelection[type.id] || 0;
    if (qty > 0) {
      subtotal += qty * type.price;
      ticketSummaryItems.push(`${qty} \u00D7 ${type.name}`);
    }
  });

  const { total } = calculateOrderTotal();

  let paymentDisplay = "";
  if (state.payment && state.payment.type === "Split") {
    paymentDisplay = `Split Payment: $${state.payment.debitAmount.toFixed(2)} on Debit (${state.payment.debitCard}) + $${state.payment.creditAmount.toFixed(2)} on Credit (${state.payment.creditCard})`;
  } else if (state.payment && state.payment.cardNumber && state.payment.cardNumber.includes("Pay")) {
    paymentDisplay = state.payment.cardNumber;
  } else if (state.payment && state.payment.type === "Debit Card") {
    paymentDisplay = `Debit Card (${state.payment.brand || "Interac"} ending in ${state.payment.cardNumber.slice(-4) || "7890"})`;
  } else {
    const cardEnd = state.payment && state.payment.cardNumber ? state.payment.cardNumber.slice(-4) : "9012";
    paymentDisplay = `Credit Card (${state.payment && state.payment.brand ? state.payment.brand : "Visa"} ending in ${cardEnd})`;
  }

  if (elements.confirmationDetails) {
    elements.confirmationDetails.innerHTML = `
      <div class="ticket-pass-header">
        <div>
          <div class="pass-cineplex-brand">
            <svg viewBox="0 0 100 42" fill="none" width="34" height="16">
              <path d="M50 3C26 3 6 10.5 6 19.5C6 28.5 26 36 50 36C74 36 94 28.5 94 19.5C94 10.5 74 3 50 3ZM50 6.5C70.5 6.5 88 12.5 88 19.5C88 26.5 70.5 32.5 50 32.5C29.5 32.5 12 26.5 12 19.5C12 12.5 29.5 6.5 50 6.5Z" fill="#ffd500"/>
              <path d="M50 10C32.5 10 18 14.5 18 19.5C18 24.5 32.5 29 50 29C67.5 29 82 24.5 82 19.5C82 14.5 67.5 10 50 10ZM50 12.8C64.5 12.8 76 16 76 19.5C76 23 64.5 26.2 50 26.2C35.5 26.2 24 23 24 19.5C24 16 35.5 12.8 50 12.8Z" fill="#ffd500"/>
              <path d="M50 15.5C39 15.5 30 17.5 30 19.5C30 21.5 39 23.5 50 23.5C61 23.5 70 21.5 70 19.5C70 17.5 61 15.5 50 15.5Z" fill="#ffd500"/>
            </svg>
            <span>CINEPLEX &bull; DIGITAL ADMISSION PASS</span>
          </div>
          <h2 style="font-family: var(--font-headline); font-weight: 900; font-size: 1.35rem; color: #ffffff; margin-top: 4px;">
            ${state.selectedMovie ? state.selectedMovie.title : "Movie Title"}
          </h2>
          <div style="font-size: 0.8rem; color: var(--cp-gold); margin-top: 2px;">
            ${state.selectedMovie ? state.selectedMovie.rating : ""} &bull; ${state.selectedMovie ? state.selectedMovie.runtime : ""} &bull; ${state.selectedFormat}
          </div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; display: block;">Booking Code</span>
          <div style="font-family: monospace; font-weight: 900; font-size: 1.25rem; color: var(--cp-gold);">${state.orderNumber}</div>
        </div>
      </div>

      <div class="order-detail-line">
        <span>Theatre Location:</span>
        <strong>${state.selectedTheatre ? state.selectedTheatre.name : "Scotiabank Theatre"}</strong>
      </div>
      <div class="order-detail-line">
        <span>Showtime:</span>
        <strong>${state.selectedDate} &bull; ${state.selectedShowtime}</strong>
      </div>
      <div class="order-detail-line">
        <span>Auditorium:</span>
        <strong>Auditorium 4 (Reserved Recliner Seating)</strong>
      </div>
      <div class="order-detail-line">
        <span>Reserved Seats:</span>
        <strong style="color: var(--cp-gold); font-size: 1.05rem;">${state.selectedSeats.join(" & ") || "A1"}</strong>
      </div>
      <div class="order-detail-line">
        <span>Tickets:</span>
        <strong>${ticketSummaryItems.join(", ") || `${state.selectedSeats.length} Tickets`}</strong>
      </div>
      <div class="order-detail-line">
        <span>Payment Method:</span>
        <strong>${paymentDisplay} &bull; Total $${total.toFixed(2)} CAD</strong>
      </div>
      <div class="order-detail-line">
        <span>Confirmation Delivered To:</span>
        <strong>${state.user.email}</strong>
      </div>

      <!-- Scannable Barcode Pass (Matches Brand Guide Page 9 PRINT SKIP SCAN) -->
      <div class="barcode-placeholder">
        <div class="barcode-subtext">CINEPLEX MOBILE ADMISSION &bull; PRINT &bull; SKIP &bull; SCAN</div>
        <div class="barcode-bars">||||| ||| |||| || ||||||| ||| |||| |||||| ||||</div>
        <div class="barcode-text">* ${state.orderNumber} *</div>
        <div style="font-size: 0.72rem; color: #475569; margin-top: 4px;">
          Present this barcode at the podium or scan at kiosk upon arrival.
        </div>
      </div>
    `;
  }
}

/* ==========================================================================
   5. NAVIGATION CONTROLLER & VALIDATION
   ========================================================================== */

/**
 * Validate current step before advancing
 */
function validateStep(step) {
  switch (step) {
    case 1:
      if (!state.selectedMovie) {
        return { valid: false, message: "Please select a movie from the catalog to continue." };
      }
      return { valid: true, message: "" };

    case 2:
      if (!state.selectedTheatre) {
        return { valid: false, message: "Please choose a Cineplex theatre location." };
      }
      return { valid: true, message: "" };

    case 3:
      if (!state.selectedShowtime) {
        return { valid: false, message: "Please select a showtime slot." };
      }
      return { valid: true, message: "" };

    case 4: {
      const requiredSeats = getTotalTicketCount();
      if (requiredSeats === 0) {
        return { valid: false, message: "Please select at least 1 ticket type above." };
      }
      if (state.selectedSeats.length !== requiredSeats) {
        return {
          valid: false,
          message: `Please pick exactly ${requiredSeats} seat${requiredSeats > 1 ? "s" : ""} on the auditorium map (currently selected: ${state.selectedSeats.length}).`
        };
      }
      return { valid: true, message: "" };
    }

    case 5:
      // Flexible checkout: Guest mode only needs a valid email
      if (state.checkoutMode === "guest") {
        const guestEmail = elements.guestEmailInput ? elements.guestEmailInput.value.trim() : "";
        if (!guestEmail || !guestEmail.includes("@")) {
          return { valid: false, message: "Please enter a valid email address for guest ticket delivery." };
        }
        return { valid: true, message: "" };
      } else {
        // Sign-in mode
        if (!state.user.isLoggedIn) {
          return { valid: false, message: "Please sign in or switch back to Guest Checkout above." };
        }
        return { valid: true, message: "" };
      }

    case 6:
      return { valid: true, message: "" };

    case 7:
      return { valid: true, message: "" };

    default:
      return { valid: true, message: "" };
  }
}

/**
 * Switch active screen panel
 */
function goToStep(targetStep) {
  if (targetStep < 1 || targetStep > state.totalSteps) return;

  state.currentStep = targetStep;

  // Show/Hide Panels
  Object.keys(elements.panels).forEach((stepKey) => {
    const panel = elements.panels[stepKey];
    if (panel) {
      if (parseInt(stepKey, 10) === targetStep) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    }
  });

  // Step specific preparations
  if (targetStep === 6) {
    renderOrderSummary();
    updateAddedCardsUI();
    setPaymentMethod(state.paymentMethod || "credit");
  } else if (targetStep === 7) {
    renderConfirmation();
  }

  // Update Stepper & Controls
  updateStepperUI();
  updateSelectionSummary();
  updateNavigationControls();

  // Smooth scroll to top of window
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Update top stepper indicators
 */
function updateStepperUI() {
  elements.stepIndicators.forEach((item) => {
    const stepNum = parseInt(item.getAttribute("data-step"), 10);
    item.classList.remove("active", "completed");

    if (stepNum === state.currentStep) {
      item.classList.add("active");
    } else if (stepNum < state.currentStep) {
      item.classList.add("completed");
    }
  });
}

/**
 * Update dynamic reservation summary bar
 */
function updateSelectionSummary() {
  if (!elements.selectionSummaryBar || !elements.summaryContent) return;

  if (state.currentStep === 1 && !state.selectedMovie) {
    elements.selectionSummaryBar.style.display = "none";
    return;
  }
  elements.selectionSummaryBar.style.display = "flex";

  const parts = [];

  if (state.selectedMovie) {
    parts.push(
      `<div class="summary-pill"><span class="label">Film:</span> ${state.selectedMovie.title}</div>`
    );
  }
  if (state.selectedTheatre) {
    parts.push(
      `<div class="summary-pill"><span class="label">Cinema:</span> ${state.selectedTheatre.name}</div>`
    );
  }
  if (state.selectedShowtime) {
    parts.push(
      `<div class="summary-pill"><span class="label">Showtime:</span> ${state.selectedDate} @ ${state.selectedShowtime}</div>`
    );
  }
  if (state.selectedSeats.length > 0) {
    const totalTickets = getTotalTicketCount();
    parts.push(
      `<div class="summary-pill"><span class="label">Seats:</span> ${state.selectedSeats.join(", ")} (${state.selectedSeats.length}/${totalTickets})</div>`
    );
  }
  if (state.user.email) {
    const role = state.user.isGuest ? "Guest" : "Member";
    parts.push(
      `<div class="summary-pill"><span class="label">${role}:</span> ${state.user.email}</div>`
    );
  }

  elements.summaryContent.innerHTML = parts.join("");
}

/**
 * Update sticky bottom navigation bar controls
 */
function updateNavigationControls() {
  const currentStep = state.currentStep;
  const validation = validateStep(currentStep);

  const bottomBar = document.querySelector(".bottom-nav-bar");
  if (currentStep === 7) {
    if (bottomBar) bottomBar.style.display = "none";
    return;
  } else {
    if (bottomBar) bottomBar.style.display = "block";
  }

  // Back button visibility
  if (elements.btnBack) {
    if (currentStep === 1) {
      elements.btnBack.disabled = true;
      elements.btnBack.style.visibility = "hidden";
    } else {
      elements.btnBack.disabled = false;
      elements.btnBack.style.visibility = "visible";
    }
  }

  // Next button validation & contextual label
  if (elements.btnNext) {
    elements.btnNext.disabled = !validation.valid;

    if (elements.navValidationMsg) {
      elements.navValidationMsg.textContent = validation.valid ? "" : validation.message;
    }

    switch (currentStep) {
      case 1:
        elements.btnNext.textContent = "Continue to Theatres \u2192";
        break;
      case 2:
        elements.btnNext.textContent = "Continue to Showtimes \u2192";
        break;
      case 3:
        elements.btnNext.textContent = "Continue to Tickets & Seats \u2192";
        break;
      case 4:
        elements.btnNext.textContent = "Proceed to Checkout \u2192";
        break;
      case 5:
        elements.btnNext.textContent = "Continue to Payment \u2192";
        break;
      case 6:
        elements.btnNext.textContent = "Authorize Payment & Reserve \u2192";
        break;
      default:
        elements.btnNext.textContent = "Continue \u2192";
    }
  }
}

/* ==========================================================================
   6. EVENT LISTENERS & CHECKOUT MODES
   ========================================================================== */

/**
 * Next Button Click Handler
 */
if (elements.btnNext) {
  elements.btnNext.addEventListener("click", () => {
    const validation = validateStep(state.currentStep);

    if (!validation.valid) {
      if (elements.navValidationMsg) {
        elements.navValidationMsg.textContent = validation.message;
      }
      return;
    }

    if (state.currentStep === 6) {
      if (elements.paymentForm) {
        elements.paymentForm.requestSubmit();
      }
      return;
    }

    goToStep(state.currentStep + 1);
  });
}

/**
 * Back Button Click Handler
 */
if (elements.btnBack) {
  elements.btnBack.addEventListener("click", () => {
    if (state.currentStep > 1) {
      goToStep(state.currentStep - 1);
    }
  });
}

/**
 * Proceed to Checkout Button on Seat Card (Step 4)
 */
if (elements.btnProceedToCheckout) {
  elements.btnProceedToCheckout.addEventListener("click", () => {
    goToStep(5);
  });
}

/**
 * Step 5: Toggle Checkout Mode between Guest (No Account Required) & Sign In
 */
function setCheckoutMode(mode) {
  state.checkoutMode = mode;
  if (mode === "guest") {
    state.user.isGuest = true;
    state.user.isLoggedIn = false;
    state.user.email = elements.guestEmailInput ? elements.guestEmailInput.value.trim() || "you@email.com" : "you@email.com";

    if (elements.radioModeGuest) elements.radioModeGuest.checked = true;
    if (elements.radioModeSignin) elements.radioModeSignin.checked = false;
    if (elements.cardModeGuest) elements.cardModeGuest.classList.add("active");
    if (elements.cardModeSignin) elements.cardModeSignin.classList.remove("active");

    if (elements.panelGuestMode) elements.panelGuestMode.style.display = "block";
    if (elements.panelSigninMode) elements.panelSigninMode.style.display = "none";
  } else {
    state.user.isGuest = false;

    if (elements.radioModeGuest) elements.radioModeGuest.checked = false;
    if (elements.radioModeSignin) elements.radioModeSignin.checked = true;
    if (elements.cardModeGuest) elements.cardModeGuest.classList.remove("active");
    if (elements.cardModeSignin) elements.cardModeSignin.classList.add("active");

    if (elements.panelGuestMode) elements.panelGuestMode.style.display = "none";
    if (elements.panelSigninMode) elements.panelSigninMode.style.display = "block";
  }
  updateSelectionSummary();
  updateNavigationControls();
}

if (elements.radioModeGuest) {
  elements.radioModeGuest.addEventListener("change", () => setCheckoutMode("guest"));
}
if (elements.radioModeSignin) {
  elements.radioModeSignin.addEventListener("change", () => setCheckoutMode("signin"));
}
if (elements.cardModeGuest) {
  elements.cardModeGuest.addEventListener("click", () => setCheckoutMode("guest"));
}
if (elements.cardModeSignin) {
  elements.cardModeSignin.addEventListener("click", () => setCheckoutMode("signin"));
}

/**
 * Step 5: Guest Checkout Form Submission (Immediate progress, NO LOCK!)
 */
if (elements.guestCheckoutForm) {
  elements.guestCheckoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = elements.guestEmailInput.value.trim();
    if (!email || !email.includes("@")) {
      elements.guestErrorMsg.textContent = "Please enter a valid email address.";
      return;
    }

    elements.guestErrorMsg.textContent = "";
    state.user.isGuest = true;
    state.user.isLoggedIn = false;
    state.user.email = email;

    goToStep(6);
  });
}

if (elements.guestEmailInput) {
  elements.guestEmailInput.addEventListener("input", () => {
    state.user.email = elements.guestEmailInput.value.trim();
    updateNavigationControls();
    updateSelectionSummary();
  });
}

/**
 * Step 5: Member Sign In Form Submission (Optional)
 */
if (elements.loginForm) {
  elements.loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = elements.loginEmailInput.value.trim();
    const password = elements.loginPasswordInput.value.trim();

    if (!email || !password) {
      elements.loginErrorMsg.textContent = "Please enter both email and password.";
      return;
    }

    if (!email.includes("@")) {
      elements.loginErrorMsg.textContent = "Please enter a valid email address.";
      return;
    }

    state.user.isLoggedIn = true;
    state.user.isGuest = false;
    state.user.email = email;
    elements.loginErrorMsg.textContent = "";

    goToStep(6);
  });
}

/**
 * Step 6: Express Checkout Buttons
 */
if (elements.btnApplePay) {
  elements.btnApplePay.addEventListener("click", () => {
    state.payment = {
      name: "Apple Pay User",
      cardNumber: "Apple Pay (Device Account)",
      expiry: "Express"
    };
    goToStep(7);
  });
}

if (elements.btnGooglePay) {
  elements.btnGooglePay.addEventListener("click", () => {
    state.payment = {
      name: "Google Pay User",
      cardNumber: "Google Pay (Device Account)",
      expiry: "Express"
    };
    goToStep(7);
  });
}

if (elements.btnCreditPay) {
  elements.btnCreditPay.addEventListener("click", () => {
    state.payment = {
      type: "Credit Card",
      brand: state.addedCards.credit.brand || "Visa",
      name: state.addedCards.credit.name || "Christopher Alex",
      cardNumber: state.addedCards.credit.number || "4500 •••• •••• 9012",
      expiry: state.addedCards.credit.expiry || "12/28"
    };
    goToStep(7);
  });
}

if (elements.btnDebitPay) {
  elements.btnDebitPay.addEventListener("click", () => {
    state.payment = {
      type: "Debit Card",
      brand: "Interac Debit",
      name: state.addedCards.debit.name || "Christopher Alex",
      cardNumber: state.addedCards.debit.number || "4724 •••• •••• 7890",
      expiry: state.addedCards.debit.expiry || "09/27"
    };
    goToStep(7);
  });
}

/**
 * Step 6: Scene+ Redemption Checkbox
 */
if (elements.chkRedeemScene) {
  elements.chkRedeemScene.addEventListener("change", (e) => {
    state.redeemSceneDiscount = e.target.checked;
    renderOrderSummary();
  });
}

/**
 * Step 6: Payment Method Switching (Credit, Debit, Split)
 */
if (elements.radioPayCredit) {
  elements.radioPayCredit.addEventListener("change", () => {
    setPaymentMethod("credit");
  });
}

if (elements.radioPayDebit) {
  elements.radioPayDebit.addEventListener("change", () => {
    setPaymentMethod("debit");
  });
}

if (elements.radioPaySplit) {
  elements.radioPaySplit.addEventListener("change", () => {
    setPaymentMethod("split");
  });
}

if (elements.cardMethodCredit) {
  elements.cardMethodCredit.addEventListener("click", () => {
    setPaymentMethod("credit");
  });
}

if (elements.cardMethodDebit) {
  elements.cardMethodDebit.addEventListener("click", () => {
    setPaymentMethod("debit");
  });
}

if (elements.cardMethodSplit) {
  elements.cardMethodSplit.addEventListener("click", () => {
    setPaymentMethod("split");
  });
}

/**
 * Step 6: Toggle Adding / Changing Credit Card or Debit Card
 */
if (elements.btnShowAddCredit) {
  elements.btnShowAddCredit.addEventListener("click", () => {
    setPaymentMethod("credit");
    if (elements.sectionCreditForm) {
      elements.sectionCreditForm.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (elements.btnShowAddDebit) {
  elements.btnShowAddDebit.addEventListener("click", () => {
    setPaymentMethod("debit");
    if (elements.sectionDebitForm) {
      elements.sectionDebitForm.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (elements.btnEditCreditCard) {
  elements.btnEditCreditCard.addEventListener("click", () => {
    setPaymentMethod("credit");
    if (elements.sectionCreditForm) {
      elements.sectionCreditForm.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (elements.btnEditDebitCard) {
  elements.btnEditDebitCard.addEventListener("click", () => {
    setPaymentMethod("debit");
    if (elements.sectionDebitForm) {
      elements.sectionDebitForm.scrollIntoView({ behavior: "smooth" });
    }
  });
}

/**
 * Step 6: Save Credit Card Handler
 */
if (elements.btnSaveCreditCard) {
  elements.btnSaveCreditCard.addEventListener("click", () => {
    const name = elements.creditCardName.value.trim() || "Christopher Alex";
    const number = elements.creditCardNumber.value.trim() || "4500 1234 5678 9012";
    const expiry = elements.creditCardExpiry.value.trim() || "12/28";
    const cvv = elements.creditCardCvv.value.trim() || "123";
    const cleanNum = number.replace(/\s+/g, "");
    const last4 = cleanNum.slice(-4) || "9012";

    state.addedCards.credit = {
      name,
      number,
      masked: `${number.slice(0, 4)} •••• •••• ${last4}`,
      last4,
      expiry,
      cvv,
      brand: number.startsWith("5") ? "Mastercard" : number.startsWith("3") ? "AMEX" : "Visa",
      isAdded: true
    };

    updateAddedCardsUI();
    renderOrderSummary();
    alert("Credit card updated and saved for checkout!");
  });
}

/**
 * Step 6: Save Debit Card Handler
 */
if (elements.btnSaveDebitCard) {
  elements.btnSaveDebitCard.addEventListener("click", () => {
    const name = elements.debitCardName.value.trim() || "Christopher Alex";
    const number = elements.debitCardNumber.value.trim() || "4724 8812 3456 7890";
    const bank = elements.debitBankName ? elements.debitBankName.value : "TD Canada Trust";
    const expiry = elements.debitCardExpiry.value.trim() || "09/27";
    const cvv = elements.debitCardCvv.value.trim() || "456";
    const cleanNum = number.replace(/\s+/g, "");
    const last4 = cleanNum.slice(-4) || "7890";

    state.addedCards.debit = {
      name,
      number,
      masked: `${number.slice(0, 4)} •••• •••• ${last4}`,
      last4,
      bank,
      expiry,
      cvv,
      brand: "Interac Debit",
      isAdded: true
    };

    updateAddedCardsUI();
    renderOrderSummary();
    alert("Debit card updated and saved for checkout!");
  });
}

/**
 * Step 6: Reset / Pre-fill Prototype Mock Cards
 */
if (elements.btnPrefillMockCards) {
  elements.btnPrefillMockCards.addEventListener("click", () => {
    const fc = MOCK_DATA.fillerCards;
    state.addedCards.credit = { ...fc.credit, isAdded: true };
    state.addedCards.debit = { ...fc.debit, isAdded: true };

    if (elements.creditCardName) elements.creditCardName.value = fc.credit.name;
    if (elements.creditCardNumber) elements.creditCardNumber.value = fc.credit.number;
    if (elements.creditCardExpiry) elements.creditCardExpiry.value = fc.credit.expiry;
    if (elements.creditCardCvv) elements.creditCardCvv.value = fc.credit.cvv;

    if (elements.debitCardName) elements.debitCardName.value = fc.debit.name;
    if (elements.debitCardNumber) elements.debitCardNumber.value = fc.debit.number;
    if (elements.debitBankName) elements.debitBankName.value = fc.debit.bank;
    if (elements.debitCardExpiry) elements.debitCardExpiry.value = fc.debit.expiry;
    if (elements.debitCardCvv) elements.debitCardCvv.value = fc.debit.cvv;

    updateAddedCardsUI();
    renderOrderSummary();
  });
}

/**
 * Step 6: Split Payment Inputs and Presets
 */
if (elements.splitDebitInput) {
  elements.splitDebitInput.addEventListener("input", () => {
    updateSplitCalculation();
  });
}

if (elements.splitPresetButtons) {
  elements.splitPresetButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-split");
      const { total } = calculateOrderTotal();

      if (mode === "half") {
        state.splitDebitAmount = parseFloat((total / 2).toFixed(2));
      } else if (mode === "debit-20") {
        state.splitDebitAmount = Math.min(20.00, total);
      } else if (mode === "debit-10") {
        state.splitDebitAmount = Math.min(10.00, total);
      }

      if (elements.splitDebitInput) {
        elements.splitDebitInput.value = state.splitDebitAmount.toFixed(2);
      }

      updateSplitCalculation();
    });
  });
}

/**
 * Step 6: Main Payment Form Submission (Credit, Debit, or Split)
 */
if (elements.paymentForm) {
  elements.paymentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const { total } = calculateOrderTotal();

    if (state.paymentMethod === "credit") {
      const c = state.addedCards.credit;
      state.payment = {
        type: "Credit Card",
        brand: c.brand || "Visa",
        name: c.name,
        cardNumber: c.number,
        expiry: c.expiry
      };
    } else if (state.paymentMethod === "debit") {
      const d = state.addedCards.debit;
      state.payment = {
        type: "Debit Card",
        brand: `${d.bank || "Interac"} Debit`,
        name: d.name,
        cardNumber: d.number,
        expiry: d.expiry
      };
    } else if (state.paymentMethod === "split") {
      const c = state.addedCards.credit;
      const d = state.addedCards.debit;
      const debitVal = state.splitDebitAmount || 0;
      const creditVal = Math.max(0, total - debitVal);
      state.payment = {
        type: "Split",
        name: c.name,
        cardNumber: `Interac •••• ${d.number.slice(-4)} + Visa •••• ${c.number.slice(-4)}`,
        debitCard: `${d.bank || "Interac"} •••• ${d.number.slice(-4)}`,
        creditCard: `${c.brand || "Visa"} •••• ${c.number.slice(-4)}`,
        debitAmount: debitVal,
        creditAmount: creditVal,
        expiry: "Combined"
      };
    }

    goToStep(7);
  });
}

/**
 * Step 7: Book Another Movie / Reset Handler
 */
if (elements.btnStartOver) {
  elements.btnStartOver.addEventListener("click", () => {
    state.currentStep = 1;
    state.selectedMovie = null;
    state.selectedTheatre = null;
    state.selectedDate = MOCK_DATA.dates[0].label;
    state.selectedFormat = MOCK_DATA.showtimes[0].format;
    state.selectedShowtime = null;
    state.ticketSelection = { general: 2, child: 0, senior: 0, student: 0 };
    state.selectedSeats = [];
    state.checkoutMode = "guest";
    state.redeemSceneDiscount = false;
    state.user = { isLoggedIn: false, isGuest: true, email: "you@email.com" };
    state.paymentMethod = "credit";
    state.addedCards = {
      credit: { ...MOCK_DATA.fillerCards.credit, isAdded: true },
      debit: { ...MOCK_DATA.fillerCards.debit, isAdded: true }
    };
    state.splitDebitAmount = 20.00;
    state.payment = {
      type: "Credit Card",
      brand: "Visa",
      name: "Christopher Alex",
      cardNumber: "4500 •••• •••• 9012",
      expiry: "12/28"
    };
    state.orderNumber = null;

    if (elements.chkRedeemScene) elements.chkRedeemScene.checked = false;
    if (elements.guestCheckoutForm) elements.guestCheckoutForm.reset();
    if (elements.guestEmailInput) elements.guestEmailInput.value = "you@email.com";
    if (elements.loginForm) elements.loginForm.reset();
    if (elements.paymentForm) elements.paymentForm.reset();

    setCheckoutMode("guest");
    setPaymentMethod("credit");
    updateAddedCardsUI();

    if (elements.seatCheckoutSummaryCard) {
      elements.seatCheckoutSummaryCard.style.display = "none";
    }

    renderMovies();
    renderTheatres();
    renderShowtimes();
    renderTicketTypes();
    renderSeatGrid();
    goToStep(1);
  });
}

/**
 * Format Filter Pills in Step 1
 */
function setupFormatFilterPills() {
  const pills = document.querySelectorAll(".movie-format-toggles .format-pill");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const text = pill.textContent.trim().toLowerCase();
      if (text.includes("ultra")) {
        state.activeFormatFilter = "ultra";
      } else if (text.includes("imax")) {
        state.activeFormatFilter = "imax";
      } else if (text.includes("vip")) {
        state.activeFormatFilter = "vip";
      } else {
        state.activeFormatFilter = "all";
      }
      renderMovies();
    });
  });
}

/* ==========================================================================
   7. INITIALIZATION
   ========================================================================== */
function init() {
  renderMovies();
  renderTheatres();
  renderShowtimes();
  renderTicketTypes();
  renderSeatGrid();
  setupFormatFilterPills();
  updateAddedCardsUI();
  setPaymentMethod("credit");
  goToStep(1);
}

document.addEventListener("DOMContentLoaded", init);
