# JanmJyoti Astrology Engine Documentation

## 1. Engine Selection
We use the **`swisseph`** npm package, which is a Node.js wrapper around the renowned **Swiss Ephemeris** C library by Astrodienst.
- **Why it was selected:** It is the global gold standard for astronomical accuracy. It natively supports critical Vedic astrology requirements such as Sidereal Zodiac calculations, Ayanamsas (Lahiri, Raman, etc.), House Systems (Whole Sign, Placidus), and highly precise planetary positions.
- **Why not alternatives:** Pure JS/approximate formulas (like astronomy-engine) often lack built-in support for complex Ayanamsa/House calculations or diverge from standard Vedic astronomical ephemeris (Drik Siddhanta).

## 2. Licensing Considerations
The Swiss Ephemeris (and the `swisseph` npm wrapper) is dual-licensed:
1. **AGPLv3 (Affero General Public License):** This open-source license mandates that if you modify the library OR if you host a service over a network that uses it, you must make the *entire source code of your application* open source under AGPL, unless you purchase a commercial license.
2. **Commercial License:** Available from Astrodienst (Alois Treindl).

**Important:** For a commercial, closed-source web application, integrating `swisseph` on the backend requires purchasing a commercial license from Astrodienst to avoid violating the AGPL. Currently, in development, it is used under the open-source license, but **a commercial license MUST be acquired before launching JanmJyoti as a proprietary product.**

## 3. Astrology Standards (Config)
The engine is strictly configured with the following deterministic standards:
- **Zodiac:** Sidereal (Nirayana) `SEFLG_SIDEREAL`.
- **Ayanamsa:** Lahiri (Chitra Paksha) `SE_SIDM_LAHIRI`.
- **House System:** Whole Sign (Represented by 'W' in Swiss Ephemeris).
- **Ephemeris:** Moshier built-in ephemeris (`SEFLG_MOSEPH`) is used for this phase to avoid 50MB JPL file downloads. It is highly accurate for dates between 3000 BC and 3000 AD.

## 4. Location and Timezone Strategy
- **Coordinates:** Exact Latitude and Longitude are strictly required for accurate Lagna (Ascendant) and House calculation.
- **Timezone (IANA):** We use IANA timezone strings (e.g., `Asia/Kolkata`, `America/New_York`) to safely convert local birth time into UTC, handling daylight savings historically.
- **Provider:** Currently, location resolution uses a deterministic mock dataset (Delhi, Mumbai, etc.). Future implementations will plug in a geocoding API (e.g., Google Maps API or Nominatim).
