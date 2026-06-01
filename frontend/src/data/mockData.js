// OffPitch - FIFA World Cup 2026 Edition - Real Tournament Data
// Hosts: USA, Canada, Mexico - 48 teams, 104 matches - June 11 to July 19, 2026

export const WORLD_CUP_TEAMS = [
  // Pot 1 (Top seeds)
  { id: 'CAN', name: 'Canada', flag: '🇨🇦', color: '#FF0000', secondaryColor: '#FFFFFF', group: 'A', fifaRank: 31, host: true },
  { id: 'MEX', name: 'Mexico', flag: '🇲🇽', color: '#006847', secondaryColor: '#CE1126', group: 'B', fifaRank: 14, host: true },
  { id: 'USA', name: 'USA', flag: '🇺🇸', color: '#3C3B6E', secondaryColor: '#B22234', group: 'C', fifaRank: 13, host: true },
  { id: 'ARG', name: 'Argentina', flag: '🇦🇷', color: '#74ACDF', secondaryColor: '#FFFFFF', group: 'D', fifaRank: 1, defending: true },
  { id: 'FRA', name: 'France', flag: '🇫🇷', color: '#0055A4', secondaryColor: '#EF4135', group: 'E', fifaRank: 2 },
  { id: 'ESP', name: 'Spain', flag: '🇪🇸', color: '#AA151B', secondaryColor: '#F1BF00', group: 'F', fifaRank: 3 },
  { id: 'ENG', name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', color: '#FFFFFF', secondaryColor: '#CE1124', group: 'G', fifaRank: 4 },
  { id: 'BRA', name: 'Brazil', flag: '🇧🇷', color: '#FFDF00', secondaryColor: '#009B3A', group: 'H', fifaRank: 5 },
  { id: 'POR', name: 'Portugal', flag: '🇵🇹', color: '#006600', secondaryColor: '#FF0000', group: 'I', fifaRank: 6 },
  { id: 'NED', name: 'Netherlands', flag: '🇳🇱', color: '#FF4F00', secondaryColor: '#FFFFFF', group: 'J', fifaRank: 7 },
  { id: 'BEL', name: 'Belgium', flag: '🇧🇪', color: '#FDDA24', secondaryColor: '#EF3340', group: 'K', fifaRank: 8 },
  { id: 'ITA', name: 'Italy', flag: '🇮🇹', color: '#009246', secondaryColor: '#FFFFFF', group: 'L', fifaRank: 9 },
  
  // Pot 2
  { id: 'GER', name: 'Germany', flag: '🇩🇪', color: '#FFCC00', secondaryColor: '#DD0000', group: 'A', fifaRank: 10 },
  { id: 'CRO', name: 'Croatia', flag: '🇭🇷', color: '#FF0000', secondaryColor: '#FFFFFF', group: 'B', fifaRank: 11 },
  { id: 'URU', name: 'Uruguay', flag: '🇺🇾', color: '#0038A8', secondaryColor: '#FFCC00', group: 'C', fifaRank: 12 },
  { id: 'COL', name: 'Colombia', flag: '🇨🇴', color: '#FFD700', secondaryColor: '#003893', group: 'D', fifaRank: 15 },
  { id: 'MAR', name: 'Morocco', flag: '🇲🇦', color: '#C1272D', secondaryColor: '#006233', group: 'E', fifaRank: 16 },
  { id: 'JPN', name: 'Japan', flag: '🇯🇵', color: '#BC002D', secondaryColor: '#FFFFFF', group: 'F', fifaRank: 17 },
  { id: 'SUI', name: 'Switzerland', flag: '🇨🇭', color: '#FF0000', secondaryColor: '#FFFFFF', group: 'G', fifaRank: 18 },
  { id: 'DEN', name: 'Denmark', flag: '🇩🇰', color: '#C60C30', secondaryColor: '#FFFFFF', group: 'H', fifaRank: 19 },
  { id: 'KOR', name: 'South Korea', flag: '🇰🇷', color: '#003478', secondaryColor: '#C60C30', group: 'I', fifaRank: 22 },
  { id: 'AUS', name: 'Australia', flag: '🇦🇺', color: '#00843D', secondaryColor: '#FFCD00', group: 'J', fifaRank: 25 },
  { id: 'SEN', name: 'Senegal', flag: '🇸🇳', color: '#00853F', secondaryColor: '#FDEF42', group: 'K', fifaRank: 20 },
  { id: 'IRN', name: 'Iran', flag: '🇮🇷', color: '#239F40', secondaryColor: '#DA0000', group: 'L', fifaRank: 21 },
  
  // Pot 3
  { id: 'POL', name: 'Poland', flag: '🇵🇱', color: '#DC143C', secondaryColor: '#FFFFFF', group: 'A', fifaRank: 28 },
  { id: 'SWE', name: 'Sweden', flag: '🇸🇪', color: '#006AA7', secondaryColor: '#FECC02', group: 'B', fifaRank: 30 },
  { id: 'NGA', name: 'Nigeria', flag: '🇳🇬', color: '#008751', secondaryColor: '#FFFFFF', group: 'C', fifaRank: 27 },
  { id: 'NOR', name: 'Norway', flag: '🇳🇴', color: '#EF2B2D', secondaryColor: '#002868', group: 'D', fifaRank: 32 },
  { id: 'ECU', name: 'Ecuador', flag: '🇪🇨', color: '#FFD700', secondaryColor: '#003791', group: 'E', fifaRank: 33 },
  { id: 'TUR', name: 'Turkey', flag: '🇹🇷', color: '#E30A17', secondaryColor: '#FFFFFF', group: 'F', fifaRank: 34 },
  { id: 'TUN', name: 'Tunisia', flag: '🇹🇳', color: '#E70013', secondaryColor: '#FFFFFF', group: 'G', fifaRank: 35 },
  { id: 'EGY', name: 'Egypt', flag: '🇪🇬', color: '#CE1126', secondaryColor: '#FFFFFF', group: 'H', fifaRank: 36 },
  { id: 'ALG', name: 'Algeria', flag: '🇩🇿', color: '#006633', secondaryColor: '#FFFFFF', group: 'I', fifaRank: 37 },
  { id: 'CHI', name: 'Chile', flag: '🇨🇱', color: '#0033A0', secondaryColor: '#DA291C', group: 'J', fifaRank: 38 },
  { id: 'PER', name: 'Peru', flag: '🇵🇪', color: '#D91023', secondaryColor: '#FFFFFF', group: 'K', fifaRank: 39 },
  { id: 'CRC', name: 'Costa Rica', flag: '🇨🇷', color: '#002B7F', secondaryColor: '#DA291C', group: 'L', fifaRank: 40 },
  
  // Pot 4
  { id: 'SCO', name: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', color: '#005EB8', secondaryColor: '#FFFFFF', group: 'A', fifaRank: 42 },
  { id: 'IRL', name: 'Ireland', flag: '🇮🇪', color: '#169B62', secondaryColor: '#FF883E', group: 'B', fifaRank: 43 },
  { id: 'GHA', name: 'Ghana', flag: '🇬🇭', color: '#CE1126', secondaryColor: '#FCD116', group: 'C', fifaRank: 65 },
  { id: 'CMR', name: 'Cameroon', flag: '🇨🇲', color: '#007A5E', secondaryColor: '#CE1126', group: 'D', fifaRank: 49 },
  { id: 'CIV', name: 'Ivory Coast', flag: '🇨🇮', color: '#FF8200', secondaryColor: '#009E60', group: 'E', fifaRank: 41 },
  { id: 'KSA', name: 'Saudi Arabia', flag: '🇸🇦', color: '#006C35', secondaryColor: '#FFFFFF', group: 'F', fifaRank: 56 },
  { id: 'QAT', name: 'Qatar', flag: '🇶🇦', color: '#8D1B3D', secondaryColor: '#FFFFFF', group: 'G', fifaRank: 58 },
  { id: 'UZB', name: 'Uzbekistan', flag: '🇺🇿', color: '#1EB53A', secondaryColor: '#0099B5', group: 'H', fifaRank: 62 },
  { id: 'PAR', name: 'Paraguay', flag: '🇵🇾', color: '#D52B1E', secondaryColor: '#0038A8', group: 'I', fifaRank: 45 },
  { id: 'SRB', name: 'Serbia', flag: '🇷🇸', color: '#C6363C', secondaryColor: '#0C4076', group: 'J', fifaRank: 26 },
  { id: 'JOR', name: 'Jordan', flag: '🇯🇴', color: '#000000', secondaryColor: '#CE1126', group: 'K', fifaRank: 70 },
  { id: 'CPV', name: 'Cape Verde', flag: '🇨🇻', color: '#003893', secondaryColor: '#FFFFFF', group: 'L', fifaRank: 68 }
];

// Real players with Wikipedia commons photos that work reliably
export const PLAYERS = [
  // === ARGENTINA ===
  { id: 'p1', name: 'Lionel Messi', team: 'ARG', position: 'FW', price: 13.0, form: 9.4, goals: 8, assists: 9, age: 38, club: 'Inter Miami', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/300px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' },
  { id: 'p2', name: 'Lautaro Martínez', team: 'ARG', position: 'FW', price: 10.5, form: 8.8, goals: 11, assists: 4, age: 28, club: 'Inter Milan', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Lautaro_Mart%C3%ADnez_2021_%28cropped%29.jpg/300px-Lautaro_Mart%C3%ADnez_2021_%28cropped%29.jpg' },
  { id: 'p3', name: 'Julián Álvarez', team: 'ARG', position: 'FW', price: 10.0, form: 8.7, goals: 9, assists: 6, age: 26, club: 'Atlético Madrid', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Juli%C3%A1n_%C3%81lvarez_2024.jpg/300px-Juli%C3%A1n_%C3%81lvarez_2024.jpg' },
  { id: 'p4', name: 'Emiliano Martínez', team: 'ARG', position: 'GK', price: 7.5, form: 9.0, saves: 62, cleanSheets: 12, age: 33, club: 'Aston Villa', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Emiliano_Mart%C3%ADnez_2022.jpg/300px-Emiliano_Mart%C3%ADnez_2022.jpg' },
  { id: 'p5', name: 'Cristian Romero', team: 'ARG', position: 'DF', price: 7.0, form: 8.3, goals: 2, assists: 1, age: 27, club: 'Tottenham', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cristian_Romero_v_Ecuador_-_Argentina_-_July_2021.jpg/300px-Cristian_Romero_v_Ecuador_-_Argentina_-_July_2021.jpg' },

  // === FRANCE ===
  { id: 'p6', name: 'Kylian Mbappé', team: 'FRA', position: 'FW', price: 13.5, form: 9.6, goals: 13, assists: 5, age: 27, club: 'Real Madrid', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Kylian_Mbapp%C3%A9_2018.jpg/300px-Kylian_Mbapp%C3%A9_2018.jpg' },
  { id: 'p7', name: 'Antoine Griezmann', team: 'FRA', position: 'MF', price: 9.5, form: 8.6, goals: 5, assists: 8, age: 34, club: 'Atlético Madrid', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Antoine_Griezmann_2018.jpg/300px-Antoine_Griezmann_2018.jpg' },
  { id: 'p8', name: 'Aurélien Tchouaméni', team: 'FRA', position: 'MF', price: 8.5, form: 8.4, goals: 2, assists: 4, age: 25, club: 'Real Madrid', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Aur%C3%A9lien_Tchouam%C3%A9ni_2022.jpg/300px-Aur%C3%A9lien_Tchouam%C3%A9ni_2022.jpg' },
  { id: 'p9', name: 'William Saliba', team: 'FRA', position: 'DF', price: 7.5, form: 8.5, goals: 1, assists: 0, age: 24, club: 'Arsenal', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/William_Saliba_2024.jpg/300px-William_Saliba_2024.jpg' },
  { id: 'p10', name: 'Mike Maignan', team: 'FRA', position: 'GK', price: 6.5, form: 8.6, saves: 54, cleanSheets: 10, age: 30, club: 'AC Milan', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Mike_Maignan_2021_AC_Milan.jpg/300px-Mike_Maignan_2021_AC_Milan.jpg' },

  // === BRAZIL ===
  { id: 'p11', name: 'Vinicius Jr', team: 'BRA', position: 'FW', price: 12.0, form: 9.3, goals: 10, assists: 7, age: 25, club: 'Real Madrid', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Vin%C3%ADcius_J%C3%BAnior_2018.jpg/300px-Vin%C3%ADcius_J%C3%BAnior_2018.jpg' },
  { id: 'p12', name: 'Rodrygo Goes', team: 'BRA', position: 'FW', price: 10.5, form: 8.8, goals: 8, assists: 5, age: 24, club: 'Real Madrid', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Rodrygo_Goes_2024.jpg/300px-Rodrygo_Goes_2024.jpg' },
  { id: 'p13', name: 'Neymar Jr', team: 'BRA', position: 'FW', price: 11.0, form: 8.6, goals: 7, assists: 8, age: 33, club: 'Santos', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Bra-Cos_%2837%29_%28cropped%29.jpg/300px-Bra-Cos_%2837%29_%28cropped%29.jpg' },
  { id: 'p14', name: 'Casemiro', team: 'BRA', position: 'MF', price: 8.5, form: 8.2, goals: 3, assists: 3, age: 33, club: 'Manchester United', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Casemiro_2018.jpg/300px-Casemiro_2018.jpg' },
  { id: 'p15', name: 'Marquinhos', team: 'BRA', position: 'DF', price: 7.5, form: 8.4, goals: 2, assists: 1, age: 31, club: 'PSG', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Marquinhos_2018.jpg/300px-Marquinhos_2018.jpg' },
  { id: 'p16', name: 'Alisson Becker', team: 'BRA', position: 'GK', price: 6.5, form: 8.6, saves: 48, cleanSheets: 9, age: 33, club: 'Liverpool', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Alisson_Becker_2018.jpg/300px-Alisson_Becker_2018.jpg' },

  // === ENGLAND ===
  { id: 'p17', name: 'Harry Kane', team: 'ENG', position: 'FW', price: 11.5, form: 8.9, goals: 11, assists: 4, age: 32, club: 'Bayern Munich', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Harry_Kane_2019.jpg/300px-Harry_Kane_2019.jpg' },
  { id: 'p18', name: 'Jude Bellingham', team: 'ENG', position: 'MF', price: 11.0, form: 9.1, goals: 6, assists: 8, age: 22, club: 'Real Madrid', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jude_Bellingham_2023.jpg/300px-Jude_Bellingham_2023.jpg' },
  { id: 'p19', name: 'Bukayo Saka', team: 'ENG', position: 'FW', price: 9.5, form: 8.8, goals: 8, assists: 6, age: 24, club: 'Arsenal', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Saka_2021_%28cropped%29.jpg/300px-Saka_2021_%28cropped%29.jpg' },
  { id: 'p20', name: 'Phil Foden', team: 'ENG', position: 'MF', price: 9.5, form: 8.7, goals: 7, assists: 6, age: 25, club: 'Manchester City', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Phil_Foden_2019.jpg/300px-Phil_Foden_2019.jpg' },
  { id: 'p21', name: 'Declan Rice', team: 'ENG', position: 'MF', price: 8.0, form: 8.1, goals: 2, assists: 4, age: 26, club: 'Arsenal', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Declan_Rice_2023.jpg/300px-Declan_Rice_2023.jpg' },
  { id: 'p22', name: 'Jordan Pickford', team: 'ENG', position: 'GK', price: 6.0, form: 8.2, saves: 44, cleanSheets: 8, age: 31, club: 'Everton', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Jordan_Pickford_2018.jpg/300px-Jordan_Pickford_2018.jpg' },

  // === SPAIN ===
  { id: 'p23', name: 'Lamine Yamal', team: 'ESP', position: 'FW', price: 12.0, form: 9.2, goals: 8, assists: 9, age: 18, club: 'Barcelona', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lamine_Yamal_2024.jpg/300px-Lamine_Yamal_2024.jpg' },
  { id: 'p24', name: 'Nico Williams', team: 'ESP', position: 'FW', price: 10.0, form: 8.9, goals: 7, assists: 7, age: 23, club: 'Athletic Bilbao', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Nico_Williams_2024.jpg/300px-Nico_Williams_2024.jpg' },
  { id: 'p25', name: 'Rodri', team: 'ESP', position: 'MF', price: 10.5, form: 9.0, goals: 4, assists: 5, age: 29, club: 'Manchester City', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Rodri_2024.jpg/300px-Rodri_2024.jpg' },
  { id: 'p26', name: 'Pedri', team: 'ESP', position: 'MF', price: 9.5, form: 8.7, goals: 3, assists: 8, age: 23, club: 'Barcelona', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/2022-06-12_Spain_-_Czech_Republic_Pedri_5.jpg/300px-2022-06-12_Spain_-_Czech_Republic_Pedri_5.jpg' },
  { id: 'p27', name: 'Unai Simón', team: 'ESP', position: 'GK', price: 6.0, form: 8.4, saves: 50, cleanSheets: 9, age: 28, club: 'Athletic Bilbao', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Unai_Sim%C3%B3n_2021.jpg/300px-Unai_Sim%C3%B3n_2021.jpg' },

  // === PORTUGAL ===
  { id: 'p28', name: 'Cristiano Ronaldo', team: 'POR', position: 'FW', price: 11.0, form: 8.5, goals: 9, assists: 2, age: 41, club: 'Al-Nassr', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/300px-Cristiano_Ronaldo_2018.jpg' },
  { id: 'p29', name: 'Bruno Fernandes', team: 'POR', position: 'MF', price: 10.0, form: 8.6, goals: 5, assists: 9, age: 31, club: 'Manchester United', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bruno_Fernandes_2018.jpg/300px-Bruno_Fernandes_2018.jpg' },
  { id: 'p30', name: 'Bernardo Silva', team: 'POR', position: 'MF', price: 9.5, form: 8.6, goals: 4, assists: 6, age: 31, club: 'Manchester City', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Bernardo_Silva_in_2018.jpg/300px-Bernardo_Silva_in_2018.jpg' },
  { id: 'p31', name: 'Rúben Dias', team: 'POR', position: 'DF', price: 7.5, form: 8.5, goals: 1, assists: 0, age: 28, club: 'Manchester City', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Por-Ned_%2825%29_%28cropped%29.jpg/300px-Por-Ned_%2825%29_%28cropped%29.jpg' },
  { id: 'p32', name: 'Diogo Costa', team: 'POR', position: 'GK', price: 6.0, form: 8.3, saves: 42, cleanSheets: 8, age: 26, club: 'Porto', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Diogo_Costa_2022.jpg/300px-Diogo_Costa_2022.jpg' },

  // === GERMANY ===
  { id: 'p33', name: 'Florian Wirtz', team: 'GER', position: 'MF', price: 10.5, form: 8.9, goals: 7, assists: 8, age: 22, club: 'Liverpool', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Florian_Wirtz_2023.jpg/300px-Florian_Wirtz_2023.jpg' },
  { id: 'p34', name: 'Jamal Musiala', team: 'GER', position: 'FW', price: 10.0, form: 8.7, goals: 6, assists: 5, age: 22, club: 'Bayern Munich', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Jamal_Musiala_2023.jpg/300px-Jamal_Musiala_2023.jpg' },
  { id: 'p35', name: 'Joshua Kimmich', team: 'GER', position: 'MF', price: 9.0, form: 8.6, goals: 3, assists: 6, age: 30, club: 'Bayern Munich', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Joshua_Kimmich_2018.jpg/300px-Joshua_Kimmich_2018.jpg' },
  { id: 'p36', name: 'Antonio Rüdiger', team: 'GER', position: 'DF', price: 7.0, form: 8.3, goals: 1, assists: 1, age: 32, club: 'Real Madrid', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Antonio_R%C3%BCdiger_2018.jpg/300px-Antonio_R%C3%BCdiger_2018.jpg' },
  { id: 'p37', name: 'Manuel Neuer', team: 'GER', position: 'GK', price: 6.5, form: 8.4, saves: 46, cleanSheets: 8, age: 39, club: 'Bayern Munich', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Manuel_Neuer_2018.jpg/300px-Manuel_Neuer_2018.jpg' },

  // === NETHERLANDS ===
  { id: 'p38', name: 'Virgil van Dijk', team: 'NED', position: 'DF', price: 8.0, form: 8.7, goals: 2, assists: 1, age: 34, club: 'Liverpool', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Virgil_van_Dijk_2018.jpg/300px-Virgil_van_Dijk_2018.jpg' },
  { id: 'p39', name: 'Frenkie de Jong', team: 'NED', position: 'MF', price: 9.0, form: 8.4, goals: 2, assists: 6, age: 28, club: 'Barcelona', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Frenkie_de_Jong_2022.jpg/300px-Frenkie_de_Jong_2022.jpg' },
  { id: 'p40', name: 'Cody Gakpo', team: 'NED', position: 'FW', price: 9.5, form: 8.7, goals: 8, assists: 5, age: 26, club: 'Liverpool', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Cody_Gakpo_2022.jpg/300px-Cody_Gakpo_2022.jpg' },

  // === BELGIUM ===
  { id: 'p41', name: 'Kevin De Bruyne', team: 'BEL', position: 'MF', price: 10.5, form: 8.9, goals: 4, assists: 11, age: 34, club: 'Napoli', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Kevin_De_Bruyne_201807091.jpg/300px-Kevin_De_Bruyne_201807091.jpg' },
  { id: 'p42', name: 'Thibaut Courtois', team: 'BEL', position: 'GK', price: 6.5, form: 8.5, saves: 52, cleanSheets: 8, age: 33, club: 'Real Madrid', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Thibaut_Courtois_2018.jpg/300px-Thibaut_Courtois_2018.jpg' },
  { id: 'p43', name: 'Romelu Lukaku', team: 'BEL', position: 'FW', price: 9.0, form: 8.4, goals: 9, assists: 3, age: 32, club: 'Napoli', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Romelu_Lukaku_2018.jpg/300px-Romelu_Lukaku_2018.jpg' },

  // === ITALY ===
  { id: 'p44', name: 'Federico Chiesa', team: 'ITA', position: 'FW', price: 9.0, form: 8.5, goals: 6, assists: 4, age: 28, club: 'Liverpool', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Federico_Chiesa_2021.jpg/300px-Federico_Chiesa_2021.jpg' },
  { id: 'p45', name: 'Nicolò Barella', team: 'ITA', position: 'MF', price: 8.5, form: 8.4, goals: 3, assists: 5, age: 28, club: 'Inter Milan', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nicolo_Barella_2021.jpg/300px-Nicolo_Barella_2021.jpg' },
  { id: 'p46', name: 'Gianluigi Donnarumma', team: 'ITA', position: 'GK', price: 6.5, form: 8.5, saves: 50, cleanSheets: 9, age: 26, club: 'Manchester City', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Gianluigi_Donnarumma_2024.jpg/300px-Gianluigi_Donnarumma_2024.jpg' },

  // === USA (Host) ===
  { id: 'p47', name: 'Christian Pulisic', team: 'USA', position: 'FW', price: 9.5, form: 8.6, goals: 8, assists: 5, age: 27, club: 'AC Milan', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Christian_Pulisic_2018.jpg/300px-Christian_Pulisic_2018.jpg' },
  { id: 'p48', name: 'Weston McKennie', team: 'USA', position: 'MF', price: 7.5, form: 8.2, goals: 3, assists: 4, age: 27, club: 'Juventus', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Weston_McKennie_2018.jpg/300px-Weston_McKennie_2018.jpg' },
  { id: 'p49', name: 'Matt Turner', team: 'USA', position: 'GK', price: 5.5, form: 7.9, saves: 38, cleanSheets: 6, age: 31, club: 'Crystal Palace', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Matt_Turner_2023.jpg/300px-Matt_Turner_2023.jpg' },

  // === NORWAY (Haaland) ===
  { id: 'p50', name: 'Erling Haaland', team: 'NOR', position: 'FW', price: 13.5, form: 9.7, goals: 16, assists: 3, age: 25, club: 'Manchester City', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Erling_Haaland_2023_%28cropped%29.jpg/300px-Erling_Haaland_2023_%28cropped%29.jpg' },
  { id: 'p51', name: 'Martin Ødegaard', team: 'NOR', position: 'MF', price: 10.0, form: 8.8, goals: 5, assists: 7, age: 27, club: 'Arsenal', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Martin_%C3%98degaard_2024.jpg/300px-Martin_%C3%98degaard_2024.jpg' },

  // === CROATIA ===
  { id: 'p52', name: 'Luka Modrić', team: 'CRO', position: 'MF', price: 8.5, form: 8.3, goals: 2, assists: 6, age: 40, club: 'AC Milan', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Luka_Modri%C4%87_2018.jpg/300px-Luka_Modri%C4%87_2018.jpg' },

  // === MOROCCO ===
  { id: 'p53', name: 'Achraf Hakimi', team: 'MAR', position: 'DF', price: 8.0, form: 8.6, goals: 2, assists: 5, age: 27, club: 'PSG', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Achraf_Hakimi_2018.jpg/300px-Achraf_Hakimi_2018.jpg' },

  // === POLAND ===
  { id: 'p54', name: 'Robert Lewandowski', team: 'POL', position: 'FW', price: 10.5, form: 8.7, goals: 13, assists: 3, age: 37, club: 'Barcelona', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Robert_Lewandowski_2018.jpg/300px-Robert_Lewandowski_2018.jpg' },

  // === URUGUAY ===
  { id: 'p55', name: 'Federico Valverde', team: 'URU', position: 'MF', price: 9.0, form: 8.5, goals: 4, assists: 5, age: 27, club: 'Real Madrid', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Federico_Valverde_in_2022.jpg/300px-Federico_Valverde_in_2022.jpg' },

  // === SENEGAL ===
  { id: 'p56', name: 'Sadio Mané', team: 'SEN', position: 'FW', price: 8.5, form: 8.3, goals: 6, assists: 4, age: 33, club: 'Al-Nassr', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sadio_Man%C3%A9_2018.jpg/300px-Sadio_Man%C3%A9_2018.jpg' },

  // === EGYPT ===
  { id: 'p57', name: 'Mohamed Salah', team: 'EGY', position: 'FW', price: 11.5, form: 9.1, goals: 14, assists: 6, age: 33, club: 'Liverpool', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Mohamed_Salah_2018.jpg/300px-Mohamed_Salah_2018.jpg' }
];

// === GOLDEN BOOT RACE (top scorers) ===
export const GOLDEN_BOOT = [
  { rank: 1, playerId: 'p50', name: 'Erling Haaland', team: 'NOR', flag: '🇳🇴', goals: 16, matches: 7, avg: 2.29, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Erling_Haaland_2023_%28cropped%29.jpg/200px-Erling_Haaland_2023_%28cropped%29.jpg' },
  { rank: 2, playerId: 'p57', name: 'Mohamed Salah', team: 'EGY', flag: '🇪🇬', goals: 14, matches: 7, avg: 2.00, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Mohamed_Salah_2018.jpg/200px-Mohamed_Salah_2018.jpg' },
  { rank: 3, playerId: 'p6', name: 'Kylian Mbappé', team: 'FRA', flag: '🇫🇷', goals: 13, matches: 7, avg: 1.86, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Kylian_Mbapp%C3%A9_2018.jpg/200px-Kylian_Mbapp%C3%A9_2018.jpg' },
  { rank: 4, playerId: 'p54', name: 'Robert Lewandowski', team: 'POL', flag: '🇵🇱', goals: 13, matches: 7, avg: 1.86, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Robert_Lewandowski_2018.jpg/200px-Robert_Lewandowski_2018.jpg' },
  { rank: 5, playerId: 'p17', name: 'Harry Kane', team: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', goals: 11, matches: 7, avg: 1.57, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Harry_Kane_2019.jpg/200px-Harry_Kane_2019.jpg' },
  { rank: 6, playerId: 'p2', name: 'Lautaro Martínez', team: 'ARG', flag: '🇦🇷', goals: 11, matches: 7, avg: 1.57, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Lautaro_Mart%C3%ADnez_2021_%28cropped%29.jpg/200px-Lautaro_Mart%C3%ADnez_2021_%28cropped%29.jpg' },
  { rank: 7, playerId: 'p11', name: 'Vinicius Jr', team: 'BRA', flag: '🇧🇷', goals: 10, matches: 7, avg: 1.43, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Vin%C3%ADcius_J%C3%BAnior_2018.jpg/200px-Vin%C3%ADcius_J%C3%BAnior_2018.jpg' },
  { rank: 8, playerId: 'p28', name: 'Cristiano Ronaldo', team: 'POR', flag: '🇵🇹', goals: 9, matches: 7, avg: 1.29, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/200px-Cristiano_Ronaldo_2018.jpg' }
];

// === GOLDEN GLOVE RACE (best goalkeepers) ===
export const GOLDEN_GLOVE = [
  { rank: 1, playerId: 'p4', name: 'Emiliano Martínez', team: 'ARG', flag: '🇦🇷', cleanSheets: 12, saves: 62, savePercent: 89, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Emiliano_Mart%C3%ADnez_2022.jpg/200px-Emiliano_Mart%C3%ADnez_2022.jpg' },
  { rank: 2, playerId: 'p10', name: 'Mike Maignan', team: 'FRA', flag: '🇫🇷', cleanSheets: 10, saves: 54, savePercent: 87, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Mike_Maignan_2021_AC_Milan.jpg/200px-Mike_Maignan_2021_AC_Milan.jpg' },
  { rank: 3, playerId: 'p27', name: 'Unai Simón', team: 'ESP', flag: '🇪🇸', cleanSheets: 9, saves: 50, savePercent: 86, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Unai_Sim%C3%B3n_2021.jpg/200px-Unai_Sim%C3%B3n_2021.jpg' },
  { rank: 4, playerId: 'p46', name: 'Gianluigi Donnarumma', team: 'ITA', flag: '🇮🇹', cleanSheets: 9, saves: 50, savePercent: 85, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Gianluigi_Donnarumma_2024.jpg/200px-Gianluigi_Donnarumma_2024.jpg' },
  { rank: 5, playerId: 'p16', name: 'Alisson Becker', team: 'BRA', flag: '🇧🇷', cleanSheets: 9, saves: 48, savePercent: 84, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Alisson_Becker_2018.jpg/200px-Alisson_Becker_2018.jpg' },
  { rank: 6, playerId: 'p42', name: 'Thibaut Courtois', team: 'BEL', flag: '🇧🇪', cleanSheets: 8, saves: 52, savePercent: 83, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Thibaut_Courtois_2018.jpg/200px-Thibaut_Courtois_2018.jpg' }
];

// === GOLDEN BALL RACE (best players overall) ===
export const GOLDEN_BALL = [
  { rank: 1, playerId: 'p6', name: 'Kylian Mbappé', team: 'FRA', flag: '🇫🇷', rating: 9.5, goals: 13, assists: 5, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Kylian_Mbapp%C3%A9_2018.jpg/200px-Kylian_Mbapp%C3%A9_2018.jpg' },
  { rank: 2, playerId: 'p18', name: 'Jude Bellingham', team: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', rating: 9.3, goals: 6, assists: 8, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jude_Bellingham_2023.jpg/200px-Jude_Bellingham_2023.jpg' },
  { rank: 3, playerId: 'p11', name: 'Vinicius Jr', team: 'BRA', flag: '🇧🇷', rating: 9.2, goals: 10, assists: 7, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Vin%C3%ADcius_J%C3%BAnior_2018.jpg/200px-Vin%C3%ADcius_J%C3%BAnior_2018.jpg' },
  { rank: 4, playerId: 'p23', name: 'Lamine Yamal', team: 'ESP', flag: '🇪🇸', rating: 9.2, goals: 8, assists: 9, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lamine_Yamal_2024.jpg/200px-Lamine_Yamal_2024.jpg' },
  { rank: 5, playerId: 'p1', name: 'Lionel Messi', team: 'ARG', flag: '🇦🇷', rating: 9.1, goals: 8, assists: 9, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/200px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' }
];

// === BEST YOUNG PLAYER (under 21) ===
export const YOUNG_PLAYERS = [
  { rank: 1, playerId: 'p23', name: 'Lamine Yamal', team: 'ESP', flag: '🇪🇸', age: 18, rating: 9.2, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lamine_Yamal_2024.jpg/200px-Lamine_Yamal_2024.jpg' },
  { rank: 2, playerId: 'p18', name: 'Jude Bellingham', team: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 22, rating: 9.1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jude_Bellingham_2023.jpg/200px-Jude_Bellingham_2023.jpg' },
  { rank: 3, playerId: 'p33', name: 'Florian Wirtz', team: 'GER', flag: '🇩🇪', age: 22, rating: 8.9, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Florian_Wirtz_2023.jpg/200px-Florian_Wirtz_2023.jpg' },
  { rank: 4, playerId: 'p34', name: 'Jamal Musiala', team: 'GER', flag: '🇩🇪', age: 22, rating: 8.7, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Jamal_Musiala_2023.jpg/200px-Jamal_Musiala_2023.jpg' }
];

// === WORLD CUP 2026 SCHEDULE ===
// Format: { id, date, time, group, stage, homeTeam, awayTeam, venue, city, status, score?, mins? }
export const WC_MATCHES = [
  // GROUP STAGE - Matchday 1 (June 11-14, 2026)
  { id: 'm1', date: '2026-06-11', time: '20:00', stage: 'Group A', homeTeam: 'MEX', awayTeam: 'CAN', venue: 'Estadio Azteca', city: 'Mexico City', status: 'upcoming' },
  { id: 'm2', date: '2026-06-12', time: '18:00', stage: 'Group A', homeTeam: 'GER', awayTeam: 'POL', venue: 'SoFi Stadium', city: 'Los Angeles', status: 'upcoming' },
  { id: 'm3', date: '2026-06-12', time: '21:00', stage: 'Group A', homeTeam: 'SCO', awayTeam: 'CAN', venue: 'BMO Field', city: 'Toronto', status: 'upcoming' },
  { id: 'm4', date: '2026-06-13', time: '12:00', stage: 'Group B', homeTeam: 'MEX', awayTeam: 'CRO', venue: 'Estadio Akron', city: 'Guadalajara', status: 'upcoming' },
  { id: 'm5', date: '2026-06-13', time: '15:00', stage: 'Group B', homeTeam: 'IRL', awayTeam: 'SWE', venue: 'MetLife Stadium', city: 'New York/New Jersey', status: 'upcoming' },
  { id: 'm6', date: '2026-06-13', time: '18:00', stage: 'Group C', homeTeam: 'USA', awayTeam: 'NGA', venue: 'Mercedes-Benz Stadium', city: 'Atlanta', status: 'upcoming' },
  { id: 'm7', date: '2026-06-13', time: '21:00', stage: 'Group C', homeTeam: 'URU', awayTeam: 'GHA', venue: 'Hard Rock Stadium', city: 'Miami', status: 'upcoming' },
  { id: 'm8', date: '2026-06-14', time: '15:00', stage: 'Group D', homeTeam: 'ARG', awayTeam: 'CMR', venue: 'Lincoln Financial Field', city: 'Philadelphia', status: 'upcoming' },
  { id: 'm9', date: '2026-06-14', time: '18:00', stage: 'Group D', homeTeam: 'COL', awayTeam: 'NOR', venue: 'NRG Stadium', city: 'Houston', status: 'upcoming' },
  { id: 'm10', date: '2026-06-14', time: '21:00', stage: 'Group E', homeTeam: 'FRA', awayTeam: 'CIV', venue: 'AT&T Stadium', city: 'Dallas', status: 'upcoming' },
  
  // LIVE MATCH (for demo)
  { id: 'm11', date: '2026-06-15', time: '18:00', stage: 'Group E', homeTeam: 'FRA', awayTeam: 'ENG', venue: 'Lusail Stadium', city: 'Doha', status: 'live', homeScore: 2, awayScore: 2, mins: 78 },
  
  // Knockout - Round of 32
  { id: 'm90', date: '2026-06-28', time: '17:00', stage: 'Round of 32', homeTeam: 'ARG', awayTeam: 'POL', venue: 'MetLife Stadium', city: 'New York/New Jersey', status: 'upcoming' },
  { id: 'm91', date: '2026-06-29', time: '20:00', stage: 'Round of 32', homeTeam: 'BRA', awayTeam: 'JPN', venue: 'SoFi Stadium', city: 'Los Angeles', status: 'upcoming' },
  { id: 'm92', date: '2026-06-30', time: '17:00', stage: 'Round of 32', homeTeam: 'FRA', awayTeam: 'CRO', venue: 'NRG Stadium', city: 'Houston', status: 'upcoming' },
  { id: 'm93', date: '2026-07-01', time: '20:00', stage: 'Round of 32', homeTeam: 'ESP', awayTeam: 'MAR', venue: 'AT&T Stadium', city: 'Dallas', status: 'upcoming' },
  
  // Round of 16
  { id: 'm94', date: '2026-07-04', time: '17:00', stage: 'Round of 16', homeTeam: 'ARG', awayTeam: 'NED', venue: 'Hard Rock Stadium', city: 'Miami', status: 'upcoming' },
  { id: 'm95', date: '2026-07-05', time: '20:00', stage: 'Round of 16', homeTeam: 'BRA', awayTeam: 'POR', venue: 'Lincoln Financial Field', city: 'Philadelphia', status: 'upcoming' },
  
  // Quarter Finals
  { id: 'm96', date: '2026-07-10', time: '17:00', stage: 'Quarter Final', homeTeam: 'ARG', awayTeam: 'BRA', venue: 'MetLife Stadium', city: 'New York/New Jersey', status: 'upcoming' },
  { id: 'm97', date: '2026-07-11', time: '20:00', stage: 'Quarter Final', homeTeam: 'FRA', awayTeam: 'ESP', venue: 'AT&T Stadium', city: 'Dallas', status: 'upcoming' },
  
  // Semi Finals
  { id: 'm98', date: '2026-07-14', time: '20:00', stage: 'Semi Final', homeTeam: 'ARG', awayTeam: 'FRA', venue: 'AT&T Stadium', city: 'Dallas', status: 'upcoming' },
  { id: 'm99', date: '2026-07-15', time: '20:00', stage: 'Semi Final', homeTeam: 'BRA', awayTeam: 'ESP', venue: 'MetLife Stadium', city: 'New York/New Jersey', status: 'upcoming' },
  
  // Third Place
  { id: 'm100', date: '2026-07-18', time: '15:00', stage: '3rd Place', homeTeam: 'FRA', awayTeam: 'BRA', venue: 'Hard Rock Stadium', city: 'Miami', status: 'upcoming' },
  
  // FINAL
  { id: 'mFinal', date: '2026-07-19', time: '15:00', stage: 'FINAL', homeTeam: 'ARG', awayTeam: 'ESP', venue: 'MetLife Stadium', city: 'New York/New Jersey', status: 'upcoming' }
];

// === GROUP STANDINGS ===
export const GROUP_STANDINGS = {
  A: [
    { team: 'GER', P: 2, W: 2, D: 0, L: 0, GF: 5, GA: 1, GD: 4, Pts: 6 },
    { team: 'MEX', P: 2, W: 1, D: 1, L: 0, GF: 4, GA: 2, GD: 2, Pts: 4 },
    { team: 'POL', P: 2, W: 0, D: 1, L: 1, GF: 1, GA: 3, GD: -2, Pts: 1 },
    { team: 'CAN', P: 2, W: 0, D: 0, L: 2, GF: 0, GA: 4, GD: -4, Pts: 0 }
  ],
  D: [
    { team: 'ARG', P: 2, W: 2, D: 0, L: 0, GF: 6, GA: 1, GD: 5, Pts: 6 },
    { team: 'COL', P: 2, W: 1, D: 0, L: 1, GF: 3, GA: 3, GD: 0, Pts: 3 },
    { team: 'NOR', P: 2, W: 1, D: 0, L: 1, GF: 4, GA: 3, GD: 1, Pts: 3 },
    { team: 'CMR', P: 2, W: 0, D: 0, L: 2, GF: 1, GA: 7, GD: -6, Pts: 0 }
  ],
  E: [
    { team: 'FRA', P: 2, W: 2, D: 0, L: 0, GF: 7, GA: 2, GD: 5, Pts: 6 },
    { team: 'ENG', P: 2, W: 1, D: 1, L: 0, GF: 4, GA: 2, GD: 2, Pts: 4 },
    { team: 'ECU', P: 2, W: 0, D: 1, L: 1, GF: 2, GA: 4, GD: -2, Pts: 1 },
    { team: 'CIV', P: 2, W: 0, D: 0, L: 2, GF: 1, GA: 6, GD: -5, Pts: 0 }
  ]
};

export const LEADERBOARD_FRIENDS = [
  { id: 'f1', username: 'FootyKing99', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=39FF14', points: 1247, rank: 1, trend: 'up', teamFlag: '🇧🇷', streak: 7 },
  { id: 'f2', username: 'MoTheMourinho', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=00E5FF', points: 1198, rank: 2, trend: 'same', teamFlag: '🇵🇹', streak: 5 },
  { id: 'f3', username: 'TikiTakaLord', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Shadow&backgroundColor=FF007F', points: 1156, rank: 3, trend: 'up', teamFlag: '🇪🇸', streak: 4 },
  { id: 'f4', username: 'xG_Destroyer', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Garfield&backgroundColor=FFB800', points: 1089, rank: 4, trend: 'down', teamFlag: '🇩🇪', streak: 2 },
  { id: 'f5', username: 'Zlatan_Wannabe', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Bella&backgroundColor=8B5CF6', points: 1034, rank: 5, trend: 'down', teamFlag: '🇸🇪', streak: 3 },
  { id: 'f6', username: 'PepTacticsNerd', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Chester&backgroundColor=EF4444', points: 987, rank: 6, trend: 'up', teamFlag: '🇪🇸', streak: 6 },
  { id: 'f7', username: 'CR7Forever', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Oliver&backgroundColor=F59E0B', points: 912, rank: 7, trend: 'same', teamFlag: '🇵🇹', streak: 1 },
  { id: 'f8', username: 'MessiMagic', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Willow&backgroundColor=10B981', points: 876, rank: 8, trend: 'down', teamFlag: '🇦🇷', streak: 8 }
];

// === MATCH STORIES (Live now) ===
export const MATCH_STORIES = [
  { id: 's1', team: 'FRA', flag: '🇫🇷', label: 'France', isLive: true, color: '#0055A4', preview: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=600&fit=crop&q=85' },
  { id: 's2', team: 'BRA', flag: '🇧🇷', label: 'Brazil', isLive: true, color: '#FFDF00', preview: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=600&fit=crop&q=85' },
  { id: 's3', team: 'ARG', flag: '🇦🇷', label: 'Argentina', isLive: false, color: '#74ACDF', preview: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=600&fit=crop&q=85' },
  { id: 's4', team: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', label: 'England', isLive: true, color: '#CE1124', preview: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=600&fit=crop&q=85' },
  { id: 's5', team: 'ESP', flag: '🇪🇸', label: 'Spain', isLive: false, color: '#AA151B', preview: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=600&fit=crop&q=85' },
  { id: 's6', team: 'GER', flag: '🇩🇪', label: 'Germany', isLive: false, color: '#FFCC00', preview: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&h=600&fit=crop&q=85' },
  { id: 's7', team: 'POR', flag: '🇵🇹', label: 'Portugal', isLive: true, color: '#006600', preview: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=600&fit=crop&q=85' },
  { id: 's8', team: 'NED', flag: '🇳🇱', label: 'Netherlands', isLive: false, color: '#FF4F00', preview: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=600&fit=crop&q=85' }
];

export const TRENDING_HASHTAGS = [
  { tag: '#MbappeMagic', posts: '142K', color: '#39FF14' },
  { tag: '#ENGFRA', posts: '89K', color: '#FF007F' },
  { tag: '#VARGate', posts: '67K', color: '#00E5FF' },
  { tag: '#WorldCup2026', posts: '2.3M', color: '#FFB800' },
  { tag: '#SIUUUUU', posts: '45K', color: '#FF007F' },
  { tag: '#YamalIsTheGOAT', posts: '38K', color: '#39FF14' }
];

export const BANTER_POSTS = [
  { id: 'bp1', author: 'FootyKing99', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=39FF14', teamFlag: '🇧🇷', content: 'Haaland literally turned that defense into a training cone drill. Absolute violation! 🔥💀', image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=500&fit=crop&q=85', cheers: 2341, jeers: 12, bookmarked: false, timestamp: new Date(Date.now() - 1000 * 60 * 5), category: 'hot_takes', reactions: { '🔥': 423, '💀': 198, '⚽': 89 } },
  { id: 'bp2', author: 'TikiTakaLord', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Shadow&backgroundColor=FF007F', teamFlag: '🇪🇸', content: 'Spain playing like it\'s 2010 again. Possession merchants back on the menu! 🥘⚽', image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=500&fit=crop&q=85', cheers: 1892, jeers: 45, bookmarked: true, timestamp: new Date(Date.now() - 1000 * 60 * 15), category: 'hot_takes', reactions: { '🔥': 234, '🤯': 89, '⚽': 156 } },
  { id: 'bp3', author: 'xG_Destroyer', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Garfield&backgroundColor=FFB800', teamFlag: '🇩🇪', content: 'That VAR check took longer than my grandma loading Google Chrome 💀💀💀', image: null, cheers: 5121, jeers: 8, bookmarked: false, timestamp: new Date(Date.now() - 1000 * 60 * 32), category: 'meme_wars', reactions: { '💀': 892, '😂': 567, '🤡': 234 } },
  { id: 'bp4', author: 'MoTheMourinho', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Aneka&backgroundColor=00E5FF', teamFlag: '🇵🇹', content: 'If defending was an art form, my team would be Picasso. Elite mentality. 🎨🏆', image: null, cheers: 1456, jeers: 67, bookmarked: false, timestamp: new Date(Date.now() - 1000 * 60 * 48), category: 'hot_takes', reactions: { '🔥': 145, '👑': 89, '🎨': 23 } },
  { id: 'bp5', author: 'Zlatan_Wannabe', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Bella&backgroundColor=8B5CF6', teamFlag: '🇸🇪', content: 'Zlatan doesn\'t do push-ups. Zlatan pushes the Earth down. That\'s the difference. 🌍💪', image: 'https://images.unsplash.com/photo-1618787113620-fc01359c1c78?w=800&h=500&fit=crop&q=85', cheers: 4214, jeers: 19, bookmarked: true, timestamp: new Date(Date.now() - 1000 * 3600 * 2), category: 'meme_wars', reactions: { '👑': 567, '🔥': 423, '😂': 234 } },
  { id: 'bp6', author: 'PepTacticsNerd', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Chester&backgroundColor=EF4444', teamFlag: '🇪🇸', content: 'We created SPACE. Beautiful SPACE. More than happy with the SPACE. So so happy. 🚀✨', image: null, cheers: 2783, jeers: 34, bookmarked: false, timestamp: new Date(Date.now() - 1000 * 3600 * 3), category: 'hot_takes', reactions: { '🤯': 234, '🧠': 189, '🔥': 89 } },
  { id: 'bp7', author: 'CR7Forever', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Oliver&backgroundColor=F59E0B', teamFlag: '🇵🇹', content: 'SIUUUUU!!! When the world doubted, CR7 delivered. Again. And again. Living legend. 👑🐐', image: 'https://images.pexels.com/photos/918798/pexels-photo-918798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=800', cheers: 6342, jeers: 1124, bookmarked: false, timestamp: new Date(Date.now() - 1000 * 3600 * 5), category: 'hot_takes', reactions: { '👑': 1234, '🐐': 892, '🔥': 567 } },
  { id: 'bp8', author: 'MessiMagic', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Willow&backgroundColor=10B981', teamFlag: '🇦🇷', content: 'Messi just walked through 5 defenders like they weren\'t even there. Poetry in motion. 🐐⚽✨', image: 'https://images.pexels.com/photos/36737328/pexels-photo-36737328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=800', cheers: 7892, jeers: 45, bookmarked: true, timestamp: new Date(Date.now() - 1000 * 3600 * 8), category: 'hot_takes', reactions: { '🐐': 2341, '🔥': 1234, '⚽': 892 } },
  { id: 'bp9', author: 'TacticalGenius', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Max&backgroundColor=EC4899', teamFlag: '🇮🇹', content: 'Italian defense >>> all other defenses combined. Catenaccio is undefeated philosophy 🛡️', image: null, cheers: 1234, jeers: 234, bookmarked: false, timestamp: new Date(Date.now() - 1000 * 3600 * 12), category: 'hot_takes', reactions: { '🛡️': 234, '🔥': 89, '🇮🇹': 145 } },
  { id: 'bp10', author: 'YamalIsTheFuture', avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Luna&backgroundColor=06B6D4', teamFlag: '🇪🇸', content: 'Lamine Yamal at 18 is already better than half the Ballon d\'Or nominees fr fr 🌟', image: null, cheers: 3421, jeers: 567, bookmarked: false, timestamp: new Date(Date.now() - 1000 * 3600 * 14), category: 'hot_takes', reactions: { '🌟': 567, '🔥': 234, '⚽': 189 } }
];

export const REACTION_EMOJIS = ['🔥', '💀', '😂', '🐐', '👑', '⚽', '🤯', '🛡️', '🌟'];

export const CHAT_ROOMS = [
  { id: 'cr1', name: '🏆 Live Tournament Room', members: 12473, lastMessage: 'BROOOO that goal was insane!!', unread: 47, color: '#39FF14' },
  { id: 'cr2', name: '🤫 Toxic Rumors & Hot Takes', members: 8920, lastMessage: 'Ref needs his eyes checked fr', unread: 124, color: '#FF007F' },
  { id: 'cr3', name: '⚡ Transfer Gossip Central', members: 21034, lastMessage: 'Mbappé to Madrid CONFIRMED 🔥', unread: 0, color: '#00E5FF' },
  { id: 'cr4', name: '🎯 Fantasy Squad Help', members: 15670, lastMessage: 'Who should I captain?', unread: 13, color: '#FFB800' },
  { id: 'cr5', name: '🇧🇷 Brazil Fans United', members: 9234, lastMessage: 'VAMOS BRAZIL! 💚💛', unread: 5, color: '#009B3A' },
  { id: 'cr6', name: '🐐 GOAT Debate Arena', members: 18923, lastMessage: 'Messi vs Ronaldo... AGAIN', unread: 89, color: '#FFD700' }
];

export const MEME_GIFS = [
  { id: 'meme1', url: 'https://media.giphy.com/media/3o7TKsoVuOCiiw7Zx6/giphy.gif', label: 'Celebration' },
  { id: 'meme2', url: 'https://media.giphy.com/media/26tPnAAJxXTvpLwJy/giphy.gif', label: 'Facepalm' },
  { id: 'meme3', url: 'https://media.giphy.com/media/xT1XGWbE0XiBDX2T8Q/giphy.gif', label: 'Rage' },
  { id: 'meme4', url: 'https://media.giphy.com/media/26u4cqiYI30juCOGY/giphy.gif', label: 'Shocked' },
  { id: 'meme5', url: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif', label: 'Crying' },
  { id: 'meme6', url: 'https://media.giphy.com/media/9rnSh54p0ufe87oc8j/giphy.gif', label: 'Dancing' }
];

// AI Personas - Real legendary coaches with Wikipedia photos
export const AI_PERSONAS = [
  {
    id: 'mourinho',
    name: 'Jose Mourinho',
    title: 'The Special One',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jos%C3%A9_Mourinho_2014.jpg/300px-Jos%C3%A9_Mourinho_2014.jpg',
    catchphrase: 'If I speak, I am in big trouble.',
    color: '#39FF14',
    gradient: 'from-green-400 via-emerald-500 to-green-600'
  },
  {
    id: 'pep',
    name: 'Pep Guardiola',
    title: 'The Tactician',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pep_Guardiola.jpg/300px-Pep_Guardiola.jpg',
    catchphrase: 'So so happy, more than happy.',
    color: '#00E5FF',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600'
  },
  {
    id: 'zlatan',
    name: 'Zlatan Ibrahimovic',
    title: 'The God',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Zlatan_Ibrahimovi%C4%87_2016.jpg/300px-Zlatan_Ibrahimovi%C4%87_2016.jpg',
    catchphrase: 'Zlatan doesn\'t do auditions.',
    color: '#FF007F',
    gradient: 'from-pink-500 via-rose-500 to-red-600'
  },
  {
    id: 'ronaldo',
    name: 'Cristiano Ronaldo',
    title: 'Mr. Champions League',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/300px-Cristiano_Ronaldo_2018.jpg',
    catchphrase: 'SIUUUUU!',
    color: '#FFB800',
    gradient: 'from-yellow-400 via-amber-500 to-orange-600'
  },
  {
    id: 'messi',
    name: 'Lionel Messi',
    title: 'The GOAT',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/300px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
    catchphrase: 'Football is simple.',
    color: '#74ACDF',
    gradient: 'from-sky-400 via-blue-500 to-indigo-600'
  },
  {
    id: 'klopp',
    name: 'Jurgen Klopp',
    title: 'Heavy Metal Boss',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/J%C3%BCrgen_Klopp%2C_Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_03_%28cropped%29.jpg/300px-J%C3%BCrgen_Klopp%2C_Liverpool_vs._Chelsea%2C_UEFA_Super_Cup_2019-08-14_03_%28cropped%29.jpg',
    catchphrase: 'BOOM!',
    color: '#EF4444',
    gradient: 'from-red-500 via-orange-500 to-yellow-500'
  }
];

export const PERSONA_RESPONSES = {
  mourinho: [
    "Parking the bus? No, we're protecting the goal with tactical discipline.",
    "If I speak about the referee, I am in big trouble. Big trouble.",
    "They have fear to play us. This is a fact, not my opinion.",
    "Three Premier Leagues, more than some so-called 'big clubs' have in their history.",
    "Respect, respect, respect. That's what I demand.",
    "I prefer not to speak. If I speak, I am in big trouble.",
    "We didn't lose, we just ran out of time.",
    "Some coaches are like poets. I am more like a journalist - direct and truthful.",
    "The Special One is special for a reason. Look at my trophy cabinet.",
    "Pressure? I LIVE for pressure. My opponents crumble. I deliver."
  ],
  pep: [
    "So so happy, more than happy with the performance today.",
    "We created space. Beautiful space. That's what football is about.",
    "The players were incredible. Incredible. I cannot ask for more.",
    "Tactics? It's about creating numerical superiorities in specific zones.",
    "We have to be patient. Pass, pass, pass until we find the space.",
    "Every training session is a final. We prepare for everything.",
    "I learned from Johan Cruyff that football is about thinking, not just running.",
    "The ball moves faster than any player. That's why we play possession.",
    "Beautiful football, beautiful philosophy, beautiful players. Beautiful.",
    "We dominate matches by dominating the ball. Simple but profound."
  ],
  zlatan: [
    "Zlatan doesn't do auditions. Teams audition for Zlatan.",
    "A human like you is talking to a god. Choose your words carefully.",
    "When Zlatan plays, the world watches. It's just how it is.",
    "Other players dream of becoming Zlatan. Zlatan dreams of becoming better.",
    "Zlatan doesn't need luck. Luck needs Zlatan.",
    "You think you can challenge Zlatan? Cute. Very cute.",
    "Zlatan doesn't follow the rules. The rules follow Zlatan.",
    "At age 40, Zlatan is still better than most 25-year-olds. This is not arrogance, it's reality.",
    "Lions don't compare themselves to humans. Zlatan is the lion.",
    "Zlatan came, saw, and conquered. Always."
  ],
  ronaldo: [
    "SIUUUUU! Hard work always beats talent when talent doesn't work hard.",
    "I am the best player in history. Not arrogance, just facts.",
    "Five Champions Leagues. Do I need to say more?",
    "When pressure comes, I deliver. That's what separates the good from the great.",
    "I don't celebrate goals, I celebrate victories. There's a difference.",
    "Haters will hate, but my trophy cabinet speaks louder than their words.",
    "I train harder than anyone. That's why I perform better than anyone.",
    "Age is just a number. I'm still scoring for fun.",
    "GOAT? They use that word, I just live it.",
    "If you want to be the best, you train like the best. SIUUUU!"
  ],
  messi: [
    "Football is simple. Keep the ball, make the right pass, stay humble.",
    "I don't think about being the best. I just try to help my team win.",
    "The World Cup? It completed my career. Everything else was already there.",
    "I've always played the same way - for the love of the game.",
    "Individual awards are nice, but team trophies mean everything.",
    "Dribbling comes naturally. I see space where others see defenders.",
    "My left foot? It's just practice. Thousands of hours of practice.",
    "Barcelona will always be my home. Argentina is my heart.",
    "Pressure? It exists, but I focus on enjoying the game.",
    "I let my football do the talking. Always have, always will."
  ],
  klopp: [
    "BOOM! What a goal! Heavy metal football, baby!",
    "We are the doubters becoming believers. I love this team.",
    "When you don't take chances, you cannot win games. Simple!",
    "It's not just football. It's emotion, passion, fire. EVERYTHING!",
    "Mentality monsters! That's what we are!",
    "I have a normal one feeling. Things will go our way!",
    "The atmosphere tonight gave me goosebumps. Goosebumps!",
    "We press, we run, we fight. Until the last second!",
    "If you're not living on the edge, you're taking up too much space.",
    "Football without passion is nothing. PASSION!"
  ]
};

export const MATCH_DATA = {
  id: 'm11',
  homeTeam: { name: 'France', flag: '🇫🇷', score: 2, color: '#0055A4' },
  awayTeam: { name: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', score: 2, color: '#CE1124' },
  minute: 78,
  status: 'live',
  stadium: 'MetLife Stadium',
  city: 'New York/New Jersey',
  attendance: '82,500',
  weather: 'Clear, 22°C',
  referee: 'Daniele Orsato',
  stats: {
    possession: { home: 58, away: 42 },
    xG: { home: 2.3, away: 1.8 },
    shotsOnTarget: { home: 8, away: 5 },
    corners: { home: 7, away: 3 },
    fouls: { home: 9, away: 12 },
    passes: { home: 487, away: 352 },
    passAccuracy: { home: 89, away: 84 }
  },
  scorers: [
    { team: 'FRA', minute: 23, player: 'Mbappé', type: 'goal' },
    { team: 'ENG', minute: 41, player: 'Kane', type: 'goal' },
    { team: 'ENG', minute: 68, player: 'Bellingham', type: 'goal' },
    { team: 'FRA', minute: 68, player: 'Mbappé', type: 'goal' }
  ],
  formations: {
    france: [
      { id: 'fr1', name: 'Maignan', position: 'GK', x: 50, y: 95 },
      { id: 'fr2', name: 'Pavard', position: 'RB', x: 80, y: 75 },
      { id: 'fr3', name: 'Saliba', position: 'CB', x: 60, y: 80 },
      { id: 'fr4', name: 'Upamecano', position: 'CB', x: 40, y: 80 },
      { id: 'fr5', name: 'Hernández', position: 'LB', x: 20, y: 75 },
      { id: 'fr6', name: 'Kanté', position: 'CDM', x: 50, y: 60 },
      { id: 'fr7', name: 'Tchouaméni', position: 'CM', x: 35, y: 50 },
      { id: 'fr8', name: 'Griezmann', position: 'CM', x: 65, y: 50 },
      { id: 'fr9', name: 'Dembélé', position: 'RW', x: 75, y: 30 },
      { id: 'fr10', name: 'Mbappé', position: 'ST', x: 50, y: 20 },
      { id: 'fr11', name: 'Coman', position: 'LW', x: 25, y: 30 }
    ],
    england: [
      { id: 'en1', name: 'Pickford', position: 'GK', x: 50, y: 5 },
      { id: 'en2', name: 'Walker', position: 'RB', x: 80, y: 25 },
      { id: 'en3', name: 'Stones', position: 'CB', x: 60, y: 20 },
      { id: 'en4', name: 'Maguire', position: 'CB', x: 40, y: 20 },
      { id: 'en5', name: 'Shaw', position: 'LB', x: 20, y: 25 },
      { id: 'en6', name: 'Rice', position: 'CDM', x: 50, y: 40 },
      { id: 'en7', name: 'Bellingham', position: 'CM', x: 35, y: 50 },
      { id: 'en8', name: 'Mount', position: 'CM', x: 65, y: 50 },
      { id: 'en9', name: 'Saka', position: 'RW', x: 75, y: 70 },
      { id: 'en10', name: 'Kane', position: 'ST', x: 50, y: 80 },
      { id: 'en11', name: 'Foden', position: 'LW', x: 25, y: 70 }
    ]
  },
  commentary: [
    { minute: 78, text: 'France pressing high, looking for a winner', spicy: 'France hunting England like it\'s 1066 all over again 🔥👹' },
    { minute: 75, text: 'Yellow card for Casemiro after a late challenge', spicy: 'Casemiro forgot this ain\'t WWE! Ref finally wakes up! 💀🥋' },
    { minute: 72, text: 'Substitution: Rashford replaces Sterling', spicy: 'Sterling yeeted to the bench. Southgate\'s done watching him ghost! 👻🚪' },
    { minute: 68, text: 'GOAL! Mbappé equalizes with a stunning strike!', spicy: 'MBAPPÉ ACTIVATED CHEAT CODES!! England defense in shambles! ⚡🚀💥' },
    { minute: 65, text: 'Corner kick for England', spicy: 'England\'s 47th corner. Still can\'t score. Classic. 🤡⚽' },
    { minute: 58, text: 'Bellingham wins the ball in midfield', spicy: 'Bellingham clocked in, OBLITERATED that midfielder. Bro is built different! 🦾' },
    { minute: 41, text: 'GOAL! Kane heads it in from a Saka cross', spicy: 'KANE WITH THE HEAD! Saka deliveries are PIZZA HUT-level fresh 🍕⚽' },
    { minute: 23, text: 'GOAL! Mbappé opens scoring with clinical finish', spicy: 'MBAPPÉ. SPEED. GOAL. PSG flashbacks! He cooked that defender 👨‍🍳🔥' }
  ]
};

// News items - OneFootball inspired
export const NEWS_ITEMS = [
  { id: 'n1', title: 'Mbappé scores ANOTHER hat-trick as France demolish Ivory Coast', summary: 'Kylian Mbappé continues his red-hot form with another hat-trick, taking his Golden Boot tally to 13 goals.', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop&q=85', category: 'breaking', source: 'OffPitch News', time: '2 min ago', reads: '127K' },
  { id: 'n2', title: 'Yamal at 18 breaks Pelé\'s record as youngest WC quarter-finalist scorer', summary: 'Spain\'s teenage sensation continues to rewrite history books, breaking a 65-year-old record set by Brazilian legend Pelé.', image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=400&fit=crop&q=85', category: 'records', source: 'OffPitch News', time: '24 min ago', reads: '89K' },
  { id: 'n3', title: 'Argentina vs Brazil semi-final SOLD OUT in 47 seconds', summary: 'The clash of South American giants at MetLife Stadium has broken all ticket-selling records.', image: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=800&h=400&fit=crop&q=85', category: 'tournament', source: 'FIFA Updates', time: '1h ago', reads: '215K' },
  { id: 'n4', title: 'Haaland MAULS three defenders in viral 60-meter run', summary: 'The Norwegian striker\'s solo goal against Argentina is being called "the greatest individual goal in WC history."', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=400&fit=crop&q=85', category: 'highlights', source: 'OffPitch News', time: '3h ago', reads: '342K' },
  { id: 'n5', title: 'Ronaldo at 41: "I\'m not done yet" after Portugal\'s last-16 win', summary: 'CR7 silences critics with another match-winning performance, scoring his 9th World Cup goal.', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=400&fit=crop&q=85', category: 'interview', source: 'Sky Sports', time: '5h ago', reads: '178K' }
];

export const TRIVIA_FACTS = [
  "🔥 The 2026 World Cup will be the largest ever with 48 teams and 104 matches across USA, Canada & Mexico.",
  "⚡ The fastest goal in World Cup history was scored in just 11 seconds by Hakan Şükür of Turkey in 2002.",
  "🇧🇷 Brazil is the only country to have played in every single World Cup tournament since 1930.",
  "⚽ Just Fontaine holds the record for most goals in a single World Cup with 13 goals in 1958.",
  "👋 The infamous 'Hand of God' goal by Maradona in 1986 remains one of the most controversial moments in football history.",
  "🏆 In 1950, Uruguay shocked Brazil by winning the World Cup final at the Maracanã in front of nearly 200,000 fans.",
  "👶 Pelé is the youngest player to win a World Cup, achieving it at just 17 years old in 1958.",
  "🎯 Miroslav Klose is the all-time top scorer in World Cup history with 16 goals across four tournaments.",
  "🇮🇹 Italy and Brazil have both appeared in the World Cup final a record 9 times.",
  "🐶 The original World Cup trophy was stolen in 1966 and found a week later by a dog named Pickles.",
  "🚀 Geoff Hurst is the only player to score a hat-trick in a World Cup final (England, 1966).",
  "🌟 Lionel Messi finally won the World Cup in 2022, scoring 7 goals and winning the Golden Ball."
];

export const SOCIAL_TRENDING = [
  { platform: 'twitter', icon: '𝕏', content: '@SkySports: "Mbappé is UNSTOPPABLE tonight! 🚀⚡"', likes: '47.2K', color: '#000000' },
  { platform: 'instagram', icon: 'IG', content: '@FIFAWorldCup: "The moment that changed everything 📸✨"', likes: '892K', color: '#E1306C' },
  { platform: 'tiktok', icon: 'TT', content: '@FootballMemes: "When the ref needs VAR for that decision 💀"', likes: '1.2M', color: '#FF0050' },
  { platform: 'twitter', icon: '𝕏', content: '@ESPN: "Is this the greatest World Cup match ever? 🤯"', likes: '156K', color: '#000000' },
  { platform: 'instagram', icon: 'IG', content: '@FootballArenaHD: "Vinicius dribbling montage 🇧🇷⚽"', likes: '654K', color: '#E1306C' },
  { platform: 'tiktok', icon: 'TT', content: '@SoccerVibes: "POV: You\'re explaining football to Americans 😂"', likes: '2.1M', color: '#FF0050' }
];

export const TOXIC_WORDS = [
  'idiot', 'stupid', 'trash', 'garbage', 'loser', 'hate', 'kill', 'die', 'worst', 'dumb'
];

export const HERO_IMAGES = {
  mainHero: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&h=1080&fit=crop&q=85',
  stadiumNight: 'https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=1920&h=1080&fit=crop&q=85',
  trophyMoment: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1920&h=1080&fit=crop&q=85',
  pitchAerial: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920&h=1080&fit=crop&q=85',
  fansCrowd: 'https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1920&h=1080&fit=crop&q=85',
  goalCelebration: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&h=1080&fit=crop&q=85'
};
