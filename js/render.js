// ============================================================
// EUROTRIP 2026 — RENDERING ENGINE
// ============================================================

function stars(n) { return '★'.repeat(n) + '☆'.repeat(5 - n); }
function urgencyColor(u) { return u === 'critical' ? '#dc2626' : u === 'high' ? '#ea580c' : '#ca8a04'; }

function renderHero() {
  document.getElementById('hero-names').textContent = TRIP.names;
  document.getElementById('hero-dates').textContent = TRIP.dates;
  document.getElementById('hero-days').textContent = TRIP.duration;
  document.getElementById('hero-budget').textContent = '$' + TRIP.budget.toLocaleString() + ' USD';
  document.getElementById('hero-wedding').textContent = '💍 ' + TRIP.anchor.event + ' — ' + TRIP.anchor.date + ' in ' + TRIP.anchor.city;
  document.getElementById('hero-saving').textContent = '✈️ ' + TRIP.flightSavings;
  document.getElementById('hero-route').textContent = '🗺️ Romania → Budapest → Vienna → Alps → Ski → Rome → Barcelona → Paris';
  document.getElementById('hero-flight-note').textContent = TRIP.flightNote;
}

function renderNav() {
  document.getElementById('nav-cities').innerHTML = ITINERARY.map(s =>
    `<a href="#stop-${s.id}" class="nav-city">${s.emoji} ${s.city}</a>`
  ).join('');
}

function renderFlights() {
  const ob = FLIGHTS.outbound;
  const container = document.getElementById('flights-outbound');
  if (!container) return;
  container.innerHTML = ob.bestOptions.map(opt => `
    <div class="flight-option ${opt.recommended ? 'flight-recommended' : ''}">
      ${opt.recommended ? '<span class="flight-badge">⭐ Recommended</span>' : ''}
      <h4>${opt.airline}</h4>
      <p class="flight-route">✈️ ${opt.route}</p>
      <p class="flight-detail">🛑 Stop: ${opt.stopover}</p>
      <p class="flight-detail">⏱️ ${opt.flightTime}</p>
      <p class="flight-detail">⏳ Layover: ${opt.layover}</p>
      <p class="flight-price">~${opt.estimatePerson}/person</p>
      <p class="flight-notes">${opt.notes}</p>
    </div>
  `).join('');
  document.getElementById('flights-tip').textContent = ob.tip;

  const intra = document.getElementById('flights-intra');
  if (intra) {
    intra.innerHTML = FLIGHTS.intraEurope.map(f => `
      <tr>
        <td>${f.leg}</td>
        <td>${f.method}</td>
        <td class="price-cell">${f.cost}</td>
        <td class="note-cell">${f.notes}</td>
      </tr>
    `).join('');
  }
}

function renderItinerary() {
  const container = document.getElementById('itinerary-stops');
  container.innerHTML = ITINERARY.map((stop, i) => `
    <div class="stop-card" id="stop-${stop.id}">
      <div class="stop-image" style="background-image:url('${stop.image}')">
        <div class="stop-overlay">
          <span class="stop-number">${String(i + 1).padStart(2,'0')}</span>
          <div class="stop-header-info">
            ${stop.mandatory ? '<span class="mandatory-badge">🔴 MANDATORY</span>' : ''}
            <h2 class="stop-city">${stop.emoji} ${stop.city}</h2>
            <p class="stop-country">${stop.country}</p>
          </div>
        </div>
      </div>
      <div class="stop-body">
        <div class="stop-meta">
          <span class="meta-badge badge-nights">🌙 ${stop.nights} nights</span>
          <span class="meta-badge badge-dates">📅 ${stop.dates}</span>
          <span class="meta-badge badge-cost">💵 ~$${stop.dailyCost}/day for 2</span>
        </div>
        <div class="stop-transport">
          <span class="transport-label">✈️ Getting there:</span>
          <span class="transport-text">${stop.transport.how}</span>
        </div>
        <div class="stop-accommodation">
          <span class="accom-label">🏠 Stay:</span>
          <span class="accom-text">${stop.accommodation}</span>
          <span class="accom-cost">~$${stop.accommodationCost}/night</span>
        </div>
        ${stop.selectedActivities && stop.selectedActivities.length ? `
          <div class="selected-acts">
            <span class="acts-label">⭐ Your picks:</span>
            ${stop.selectedActivities.map(a => `<span class="act-tag">${a}</span>`).join('')}
          </div>` : ''}
        ${stop.dayByDay ? `
          <div class="day-by-day">
            <h4>📅 Day-by-Day Plan</h4>
            ${stop.dayByDay.map(d => `
              <div class="day-row">
                <span class="day-label">${d.day}</span>
                <span class="day-plan">${d.plan}</span>
              </div>`).join('')}
          </div>` : ''}
        <div class="stop-highlights">
          <h4>Highlights & Activities</h4>
          <ul>
            ${stop.highlights.map(h => `
              <li>
                <span class="h-icon">${h.icon}</span>
                <span class="h-text">${h.text}</span>
                <span class="h-cost">${h.cost}</span>
              </li>`).join('')}
          </ul>
        </div>
        ${stop.tips ? `
          <div class="stop-tips">
            <h4>💡 Tips</h4>
            <ul>${stop.tips.map(t => `<li>${t}</li>`).join('')}</ul>
          </div>` : ''}
      </div>
    </div>
  `).join('');
}

function renderVRByCity() {
  const container = document.getElementById('vr-by-city');
  if (!container) return;
  container.innerHTML = VR_BY_CITY.map(city => `
    <div class="city-section">
      <h4 class="city-label">${city.flag} ${city.city}</h4>
      <div class="city-options">
        ${city.options.map(opt => `
          <div class="option-card ${opt.name.includes('✅') ? 'selected-option' : ''}">
            <div class="opt-header">
              <span class="opt-name">${opt.name}</span>
              <span class="opt-price">${opt.price}</span>
            </div>
            <span class="opt-type">${opt.type}</span>
            <p class="opt-desc">${opt.desc}</p>
            <div class="opt-stars">${stars(opt.rating)}</div>
          </div>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderDinoByCity() {
  const container = document.getElementById('dino-by-city');
  if (!container) return;
  container.innerHTML = DINO_BY_CITY.map(city => `
    <div class="dino-card ${city.status === 'closed' ? 'dino-closed' : ''} ${city.selected ? 'dino-selected' : ''}">
      <div class="dino-header">
        <span>${city.flag} ${city.city}</span>
        ${city.selected ? '<span class="on-route-badge">✅ On Your Route</span>' : ''}
        ${city.status === 'closed' ? '<span class="closed-badge">🚫 CLOSED 2026</span>' : ''}
      </div>
      <h4>${city.name}</h4>
      ${city.warning ? `<p class="dino-warning">${city.warning}</p>` : ''}
      ${city.highlight ? `<p class="dino-highlight">${city.highlight}</p>` : ''}
      ${city.alternative ? `<p class="dino-alt">Alternative: ${city.alternative}</p>` : ''}
      ${city.admission ? `<span class="dino-price">${city.admission}</span>` : ''}
      ${city.rating > 0 ? `<div class="dino-stars">${stars(city.rating)}</div>` : ''}
    </div>
  `).join('');
}

function renderAquariums() {
  const container = document.getElementById('aquarium-cards');
  if (!container) return;
  container.innerHTML = AQUARIUMS.map(aq => `
    <div class="aquarium-card">
      <div class="aq-img" style="background-image:url('${aq.image}')">
        <span class="aq-city-badge">${aq.flag} ${aq.city}</span>
        ${aq.onRoute ? '<span class="aq-route-badge">✅ On Route</span>' : ''}
      </div>
      <div class="aq-body">
        <h4>${aq.name}</h4>
        <div class="aq-meta">
          <span class="aq-price">${aq.price}</span>
          <span class="aq-size">${aq.size}</span>
          <span class="aq-duration">⏱️ ${aq.duration}</span>
        </div>
        <p class="aq-highlights">${aq.highlights}</p>
        <p class="aq-verdict">✨ ${aq.verdict}</p>
        <div class="aq-stars">${stars(aq.rating)}</div>
      </div>
    </div>
  `).join('');
}

function renderTickets() {
  const container = document.getElementById('tickets-sections');
  if (!container) return;
  container.innerHTML = TICKETS.map(city => `
    <div class="tickets-city">
      <h4 class="tickets-city-header">${city.flag} ${city.city}</h4>
      <table class="tickets-table">
        <thead><tr><th>Attraction</th><th>Price</th><th>Notes</th></tr></thead>
        <tbody>
          ${city.attractions.map(a => `
            <tr>
              <td>${a.name}</td>
              <td class="price-cell">${a.price}</td>
              <td class="note-cell">${a.note}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `).join('');
}

function renderSkiing() {
  const container = document.getElementById('ski-options');
  if (!container) return;

  const sg = SKIING.snowGuarantee;
  document.getElementById('snow-guarantee-text').innerHTML = `
    <strong>${sg.title}</strong><br/><br/>
    ${sg.explanation}<br/><br/>
    <strong>Val Senales:</strong> ${sg.valSenalesNote}<br/>
    <strong>Passo Stelvio:</strong> ${sg.stelvioNote}<br/><br/>
    <span class="bottom-line">${sg.bottomLine}</span>
  `;

  container.innerHTML = SKIING.options.map((opt, i) => `
    <div class="ski-card ${i === 1 ? 'ski-best' : ''}">
      <div class="ski-img" style="background-image:url('${opt.image}')">
        <span class="best-badge">${i === 0 ? '✅ Recommended' : '⚡ Backup Option'}</span>
        <span class="ski-flag-badge">${opt.flag} ${opt.location}</span>
      </div>
      <div class="ski-body">
        <h4>${opt.name}</h4>
        <div class="ski-meta">
          <span>📅 Opens: <strong>${opt.opens}</strong></span>
          <span>⛷️ ${opt.terrain}</span>
          <span>🏔️ ${opt.elevation}</span>
          <span>❄️ Snow: <strong>${opt.snowGuarantee}</strong></span>
          <span>🎿 Conditions: ${opt.conditions}</span>
        </div>
        <div class="ski-costs">
          <span>🎟️ Day pass: ${opt.dayPass}</span>
          <span>🎿 Rental: ${opt.rental}</span>
          <span class="ski-total">All-in/person: <strong>${opt.totalPerPerson}</strong></span>
        </div>
        <div class="ski-procon">
          <div class="ski-pros">
            <strong style="color:#16a34a">✅ Pros</strong>
            <ul>${opt.pros.map(p => `<li>${p}</li>`).join('')}</ul>
          </div>
          <div class="ski-cons">
            <strong style="color:#dc2626">⚠️ Cons</strong>
            <ul>${opt.cons.map(c => `<li>${c}</li>`).join('')}</ul>
          </div>
        </div>
        <p class="ski-verdict">${opt.verdict}</p>
        <div class="ski-stars">${stars(opt.rating)}</div>
      </div>
    </div>
  `).join('');

  const rec = document.getElementById('ski-recommendation');
  if (rec) rec.textContent = '💡 ' + SKIING.recommendation;
}

function renderDining() {
  const container = document.getElementById('dining-cards');
  if (!container) return;
  container.innerHTML = DINING.map(r => `
    <div class="dining-card ${r.mustBook ? 'must-book' : ''}">
      <div class="dining-img" style="background-image:url('${r.image}')">
        ${r.mustBook ? '<span class="book-badge">🔴 Book 90 Days Ahead!</span>' : ''}
        ${r.stars > 0 ? `<span class="stars-badge">⭐ ${r.stars} Michelin</span>` : ''}
      </div>
      <div class="dining-body">
        <h4>${r.name}</h4>
        <p class="dining-location">📍 ${r.location}</p>
        <p class="dining-desc">${r.description}</p>
        <div class="dining-prices">
          <span class="price-per">${r.pricePerPerson}/person</span>
          <span class="price-total">Total for 2: <strong>${r.totalFor2}</strong></span>
        </div>
        <p class="dining-book">📋 ${r.bookingNote}</p>
      </div>
    </div>
  `).join('');
}

function renderBudget() {
  const tbody = document.getElementById('budget-rows');
  if (tbody) {
    tbody.innerHTML = BUDGET.categories.map(cat => `
      <tr>
        <td>${cat.label}</td>
        <td class="price-cell">$${cat.min.toLocaleString()}</td>
        <td class="price-cell">$${cat.max.toLocaleString()}</td>
        <td class="note-cell">${cat.note}</td>
      </tr>
    `).join('') + `
      <tr class="total-row">
        <td><strong>TOTAL</strong></td>
        <td class="price-cell"><strong>$${BUDGET.total.min.toLocaleString()}</strong></td>
        <td class="price-cell"><strong>$${BUDGET.total.max.toLocaleString()}</strong></td>
        <td class="note-cell">Target: <strong>$${BUDGET.total.target.toLocaleString()}</strong> ✅</td>
      </tr>`;
  }
  const accomBody = document.getElementById('accom-rows');
  if (accomBody) {
    accomBody.innerHTML = BUDGET.hotelVsAirbnb.map(row => `
      <tr>
        <td>${row.city}</td>
        <td>${row.nights} nights</td>
        <td><span class="rec-badge ${row.recommendation === 'Airbnb' ? 'rec-airbnb' : 'rec-hotel'}">${row.recommendation}</span></td>
        <td>${row.cost}</td>
        <td class="note-cell">${row.reason}</td>
      </tr>
    `).join('');
  }
  const savingsList = document.getElementById('savings-list');
  if (savingsList) savingsList.innerHTML = BUDGET.savingTips.map(t => `<li>💰 ${t}</li>`).join('');
}

function renderBookings() {
  const container = document.getElementById('bookings-list');
  if (!container) return;
  container.innerHTML = BOOKINGS.map(b => `
    <div class="booking-item">
      <div class="booking-priority">#${b.priority}</div>
      <div class="booking-content">
        <h4>${b.what}</h4>
        <p class="booking-when">📅 <strong>${b.when}</strong></p>
        <p class="booking-note">${b.note}</p>
        <span class="booking-cost">~${b.estimatedCost}</span>
      </div>
      <div class="booking-urgency-badge" style="background:${urgencyColor(b.urgency)}">
        ${b.urgency === 'critical' ? '🔴 CRITICAL' : b.urgency === 'high' ? '🟠 HIGH' : '🟡 MEDIUM'}
      </div>
    </div>
  `).join('');
}

function renderCrowdNote() {
  const el = document.getElementById('crowd-note');
  if (!el) return;
  const d = CROWD_DATA.disneylandParis;
  el.innerHTML = `
    <div class="crowd-grid">
      <div class="crowd-item crowd-bad">
        <span class="crowd-period">Mid-August</span>
        <span class="crowd-level">${d.lateAugust.level}</span>
        <span class="crowd-wait">⏱️ ${d.lateAugust.waitTimes}</span>
        <span class="crowd-note-text">${d.lateAugust.notes}</span>
      </div>
      <div class="crowd-item crowd-ok">
        <span class="crowd-period">Sep 7–13</span>
        <span class="crowd-level">${d.september7_13.level}</span>
        <span class="crowd-wait">⏱️ ${d.september7_13.waitTimes}</span>
        <span class="crowd-note-text">${d.september7_13.notes}</span>
      </div>
      <div class="crowd-item crowd-good">
        <span class="crowd-period">Sep 14–Oct 1 ✅ YOUR DATES</span>
        <span class="crowd-level">${d.september14_30.level}</span>
        <span class="crowd-wait">⏱️ ${d.september14_30.waitTimes}</span>
        <span class="crowd-note-text">${d.september14_30.notes}</span>
      </div>
    </div>
    <p class="crowd-verdict">${d.yourDates}</p>
  `;
}

function initApp() {
  renderHero();
  renderNav();
  renderFlights();
  renderItinerary();
  renderVRByCity();
  renderDinoByCity();
  renderAquariums();
  renderTickets();
  renderSkiing();
  renderDining();
  renderBudget();
  renderBookings();
  renderCrowdNote();

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-city').forEach(a => a.classList.remove('active'));
        const link = document.querySelector(`.nav-city[href="#${entry.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  document.querySelectorAll('[id^="stop-"]').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', initApp);
