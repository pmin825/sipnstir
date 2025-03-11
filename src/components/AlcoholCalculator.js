import React, { useState } from "react";
import "./AlcoholCalculator.css";

export default function AlcoholCalculator() {
  const [guests, setGuests] = useState("");
  const [drinksPerPerson, setDrinksPerPerson] = useState("");
  const [eventDuration, setEventDuration] = useState("");
  const [totalAlcohol, setTotalAlcohol] = useState(null);

  // Calculate the amount of alcohol needed
  const calculateAlcohol = (e) => {
    e.preventDefault();

    if (!guests || !drinksPerPerson || !eventDuration) {
      alert("Please fill in all fields.");
      return;
    }

    const drinksNeeded = guests * drinksPerPerson * eventDuration;
    const bottlesNeeded = Math.ceil(drinksNeeded / 16); // Assuming 16 drinks per standard liquor bottle

    setTotalAlcohol({ drinksNeeded, bottlesNeeded });
  };

  return (
    <section className="alcohol-calculator">
      <div className="calculator-container">
        <h2>Alcohol Calculator</h2>
        <p className="calculator-subtitle">
          Enter your event details, and we'll calculate how much alcohol you need! 🍸
        </p>

        <form onSubmit={calculateAlcohol} className="calculator-form">
          <div className="form-group">
            <label>Number of Guests</label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Drinks Per Person Per Hour</label>
            <input
              type="number"
              value={drinksPerPerson}
              onChange={(e) => setDrinksPerPerson(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Event Duration (Hours)</label>
            <input
              type="number"
              value={eventDuration}
              onChange={(e) => setEventDuration(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-calculate">Calculate</button>
        </form>

        {/* Display Results */}
        {totalAlcohol && (
          <div className="results">
            <h3>Results:</h3>
            <p>🍹 Total Drinks Needed: <strong>{totalAlcohol.drinksNeeded}</strong></p>
            <p>🍾 Estimated Bottles Needed: <strong>{totalAlcohol.bottlesNeeded}</strong></p>
            <p>💡 Tip: Always buy a little extra to be safe!</p>
          </div>
        )}
      </div>
    </section>
  );
}
    