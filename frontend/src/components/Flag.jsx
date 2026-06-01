import React from 'react';

// Map team IDs to ISO 3166-1 alpha-2 codes for flagcdn.com
const TEAM_TO_ISO = {
  ARG: 'ar', BRA: 'br', FRA: 'fr', ENG: 'gb-eng', ESP: 'es', GER: 'de',
  POR: 'pt', NED: 'nl', BEL: 'be', ITA: 'it', URU: 'uy', MEX: 'mx',
  USA: 'us', CAN: 'ca', CRO: 'hr', MAR: 'ma', JPN: 'jp', KOR: 'kr',
  SUI: 'ch', DEN: 'dk', POL: 'pl', SEN: 'sn', AUS: 'au', NOR: 'no',
  COL: 'co', CHI: 'cl', SWE: 'se', NGA: 'ng', EGY: 'eg', TUR: 'tr',
  SCO: 'gb-sct', IRL: 'ie', ECU: 'ec', TUN: 'tn', ALG: 'dz', PER: 'pe',
  CRC: 'cr', GHA: 'gh', CMR: 'cm', CIV: 'ci', KSA: 'sa', QAT: 'qa',
  UZB: 'uz', PAR: 'py', SRB: 'rs', JOR: 'jo', CPV: 'cv', IRN: 'ir',
  NOR: 'no'
};

/**
 * Real flag component - uses flagcdn.com for reliable flag rendering
 * Falls back to emoji if image fails
 */
const Flag = ({ teamId, emoji, size = 'md', className = '', ...props }) => {
  const iso = TEAM_TO_ISO[teamId];
  const sizeMap = {
    xs: { w: 16, h: 12, file: 'w20' },
    sm: { w: 24, h: 18, file: 'w40' },
    md: { w: 32, h: 24, file: 'w40' },
    lg: { w: 48, h: 36, file: 'w80' },
    xl: { w: 64, h: 48, file: 'w80' },
    '2xl': { w: 80, h: 60, file: 'w160' }
  };
  const s = sizeMap[size] || sizeMap.md;

  if (!iso) {
    // Fallback to emoji
    return <span className={className} style={{ fontSize: s.w }}>{emoji || '🏁'}</span>;
  }

  return (
    <img
      src={`https://flagcdn.com/${s.file}/${iso}.png`}
      alt={teamId}
      width={s.w}
      height={s.h}
      className={`inline-block rounded-sm object-cover ${className}`}
      style={{ width: s.w, height: s.h }}
      onError={(e) => {
        e.target.outerHTML = `<span class="${className}" style="font-size: ${s.w}px">${emoji || '🏁'}</span>`;
      }}
      {...props}
    />
  );
};

export default Flag;
