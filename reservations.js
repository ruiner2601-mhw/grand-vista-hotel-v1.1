// reservations.js
// Seed realistic sample reservations for training

function seedSampleReservations() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayStr = `${yyyy}-${mm}-${dd}`;

  // Helper to add days
  function addDays(days) {
    const d = new Date(today);
    d.setDate(d.getDate() + days);
    return d.toISOString().split("T")[0];
  }

  const sampleGuests = [
    {
      name: "Maria Lopez",
      passcode: "8392",
      room: 204,
      guestsInRoom: 2,
      roomStatus: "Scheduled Arrival", // arriving today
      arrivalDate: todayStr,
      departureDate: addDays(2),
      key: null,
      keyStatus: "Not Issued",
      parkingInfo: "Valet - 1 Vehicle",
      billing: "Card on File",
      creditCard: { type: "Visa", lastFour: "4482" },
      vip: true,
      hasPet: false,
      earlyCheckInRequested: true,
      notes: "VIP guest, prefers high floor. Requested early check-in.",
      requests: [
        {
          text: "Extra feather pillows",
          date: new Date().toLocaleString(),
          status: "pending",
          createdAt: Date.now() - 1000 * 60 * 30, // 30 min ago
          completedAt: null
        }
      ]
    },
    {
      name: "James Carter",
      passcode: "5521",
      room: 315,
      guestsInRoom: 1,
      roomStatus: "No-Show",
      arrivalDate: addDays(-1),
      departureDate: addDays(1),
      key: null,
      keyStatus: "Not Issued",
      parkingInfo: "No Vehicle",
      billing: "Pending",
      creditCard: { type: "MasterCard", lastFour: "2291" },
      vip: false,
      hasPet: false,
      earlyCheckInRequested: false,
      notes: "Marked as no-show after midnight.",
      requests: []
    },
    {
      name: "Mei Lin",
      passcode: "7645",
      room: 118,
      guestsInRoom: 2,
      roomStatus: "Checked In",
      arrivalDate: todayStr,
      departureDate: addDays(3),
      key: "GV-118-7645",
      keyStatus: "Active",
      parkingInfo: "Self Parking - 1 Vehicle",
      billing: "On Account",
      creditCard: { type: "Amex", lastFour: "0134" },
      vip: false,
      hasPet: true,
      earlyCheckInRequested: false,
      notes: "Traveling with small dog. Needs pet-friendly floor.",
      requests: [
        {
          text: "Dog bed and water bowls",
          date: new Date().toLocaleString(),
          status: "in-progress",
          createdAt: Date.now() - 1000 * 60 * 10, // 10 min ago
          completedAt: null
        }
      ]
    },
    {
      name: "Omar Hassan",
      passcode: "9013",
      room: 427,
      guestsInRoom: 1,
      roomStatus: "Late Checkout",
      arrivalDate: addDays(-1),
      departureDate: todayStr,
      key: "GV-427-9013",
      keyStatus: "Active",
      parkingInfo: "Valet - 1 Vehicle",
      billing: "Card on File",
      creditCard: { type: "Discover", lastFour: "7745" },
      vip: false,
      hasPet: false,
      earlyCheckInRequested: false,
      notes: "Late checkout approved until 2:00 PM.",
      requests: [
        {
          text: "Fresh towels and toiletries",
          date: new Date().toLocaleString(),
          status: "completed",
          createdAt: Date.now() - 1000 * 60 * 45, // 45 min ago
          completedAt: Date.now() - 1000 * 60 * 5 // 5 min ago
        }
      ]
    },
    {
      name: "Sophia Rossi",
      passcode: "3187",
      room: 503,
      guestsInRoom: 3,
      roomStatus: "Scheduled Arrival",
      arrivalDate: todayStr,
      departureDate: addDays(4),
      key: null,
      keyStatus: "Not Issued",
      parkingInfo: "Self Parking - 2 Vehicles",
      billing: "Card on File",
      creditCard: { type: "Visa", lastFour: "9910" },
      vip: true,
      hasPet: false,
      earlyCheckInRequested: false,
      notes: "Anniversary stay. Requesting high floor and quiet room.",
      requests: []
    }
  ];

  localStorage.setItem("guests", JSON.stringify(sampleGuests));
  localStorage.removeItem("currentGuest");
}
