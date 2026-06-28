// ═══════════════════════════════════════════════════════════════
//  KNOCKOUT BRACKET DATA — WC2026
//  Admin fills in team names + flags via the admin panel.
//  This file defines the bracket structure (slots, rounds, matchup wiring).
//  Teams are stored in Firestore under admin/knockout and injected at runtime.
// ═══════════════════════════════════════════════════════════════

// Round labels
const KO_ROUNDS = [
  { id: "r32",  label: "Round of 32", matchCount: 16 },
  { id: "r16",  label: "Round of 16", matchCount: 8  },
  { id: "qf",   label: "Quarterfinals", matchCount: 4 },
  { id: "sf",   label: "Semifinals",    matchCount: 2 },
  { id: "f",    label: "Final",         matchCount: 1 },
];

// 16 Round-of-32 matchups (slot A vs slot B).
// Slot names match what admin enters teams into.
// matchId is globally unique across all knockout rounds.
const KO_R32_MATCHES = [
  { matchId: "ko_r32_1",  round: "r32", slotA: "r32_1a",  slotB: "r32_1b",  label: "Match 1"  },
  { matchId: "ko_r32_2",  round: "r32", slotA: "r32_2a",  slotB: "r32_2b",  label: "Match 2"  },
  { matchId: "ko_r32_3",  round: "r32", slotA: "r32_3a",  slotB: "r32_3b",  label: "Match 3"  },
  { matchId: "ko_r32_4",  round: "r32", slotA: "r32_4a",  slotB: "r32_4b",  label: "Match 4"  },
  { matchId: "ko_r32_5",  round: "r32", slotA: "r32_5a",  slotB: "r32_5b",  label: "Match 5"  },
  { matchId: "ko_r32_6",  round: "r32", slotA: "r32_6a",  slotB: "r32_6b",  label: "Match 6"  },
  { matchId: "ko_r32_7",  round: "r32", slotA: "r32_7a",  slotB: "r32_7b",  label: "Match 7"  },
  { matchId: "ko_r32_8",  round: "r32", slotA: "r32_8a",  slotB: "r32_8b",  label: "Match 8"  },
  { matchId: "ko_r32_9",  round: "r32", slotA: "r32_9a",  slotB: "r32_9b",  label: "Match 9"  },
  { matchId: "ko_r32_10", round: "r32", slotA: "r32_10a", slotB: "r32_10b", label: "Match 10" },
  { matchId: "ko_r32_11", round: "r32", slotA: "r32_11a", slotB: "r32_11b", label: "Match 11" },
  { matchId: "ko_r32_12", round: "r32", slotA: "r32_12a", slotB: "r32_12b", label: "Match 12" },
  { matchId: "ko_r32_13", round: "r32", slotA: "r32_13a", slotB: "r32_13b", label: "Match 13" },
  { matchId: "ko_r32_14", round: "r32", slotA: "r32_14a", slotB: "r32_14b", label: "Match 14" },
  { matchId: "ko_r32_15", round: "r32", slotA: "r32_15a", slotB: "r32_15b", label: "Match 15" },
  { matchId: "ko_r32_16", round: "r32", slotA: "r32_16a", slotB: "r32_16b", label: "Match 16" },
];

// Bracket wiring: winner of match X feeds into slot Y of the next round.
// r32 match 1&2 winners → r16 match 1; r32 match 3&4 → r16 match 2; etc.
const KO_BRACKET_WIRE = {
  // r32 → r16
  ko_r32_1:  { feedsInto: "ko_r16_1",  asSlot: "a" },
  ko_r32_2:  { feedsInto: "ko_r16_1",  asSlot: "b" },
  ko_r32_3:  { feedsInto: "ko_r16_2",  asSlot: "a" },
  ko_r32_4:  { feedsInto: "ko_r16_2",  asSlot: "b" },
  ko_r32_5:  { feedsInto: "ko_r16_3",  asSlot: "a" },
  ko_r32_6:  { feedsInto: "ko_r16_3",  asSlot: "b" },
  ko_r32_7:  { feedsInto: "ko_r16_4",  asSlot: "a" },
  ko_r32_8:  { feedsInto: "ko_r16_4",  asSlot: "b" },
  ko_r32_9:  { feedsInto: "ko_r16_5",  asSlot: "a" },
  ko_r32_10: { feedsInto: "ko_r16_5",  asSlot: "b" },
  ko_r32_11: { feedsInto: "ko_r16_6",  asSlot: "a" },
  ko_r32_12: { feedsInto: "ko_r16_6",  asSlot: "b" },
  ko_r32_13: { feedsInto: "ko_r16_7",  asSlot: "a" },
  ko_r32_14: { feedsInto: "ko_r16_7",  asSlot: "b" },
  ko_r32_15: { feedsInto: "ko_r16_8",  asSlot: "a" },
  ko_r32_16: { feedsInto: "ko_r16_8",  asSlot: "b" },
  // r16 → qf
  ko_r16_1:  { feedsInto: "ko_qf_1",   asSlot: "a" },
  ko_r16_2:  { feedsInto: "ko_qf_1",   asSlot: "b" },
  ko_r16_3:  { feedsInto: "ko_qf_2",   asSlot: "a" },
  ko_r16_4:  { feedsInto: "ko_qf_2",   asSlot: "b" },
  ko_r16_5:  { feedsInto: "ko_qf_3",   asSlot: "a" },
  ko_r16_6:  { feedsInto: "ko_qf_3",   asSlot: "b" },
  ko_r16_7:  { feedsInto: "ko_qf_4",   asSlot: "a" },
  ko_r16_8:  { feedsInto: "ko_qf_4",   asSlot: "b" },
  // qf → sf
  ko_qf_1:   { feedsInto: "ko_sf_1",   asSlot: "a" },
  ko_qf_2:   { feedsInto: "ko_sf_1",   asSlot: "b" },
  ko_qf_3:   { feedsInto: "ko_sf_2",   asSlot: "a" },
  ko_qf_4:   { feedsInto: "ko_sf_2",   asSlot: "b" },
  // sf → final
  ko_sf_1:   { feedsInto: "ko_f_1",    asSlot: "a" },
  ko_sf_2:   { feedsInto: "ko_f_1",    asSlot: "b" },
};

// All knockout matches across all rounds (r16 onward are "TBD" until picks propagate)
const KO_ALL_MATCHES = [
  ...KO_R32_MATCHES,
  { matchId: "ko_r16_1", round: "r16", label: "R16 Match 1" },
  { matchId: "ko_r16_2", round: "r16", label: "R16 Match 2" },
  { matchId: "ko_r16_3", round: "r16", label: "R16 Match 3" },
  { matchId: "ko_r16_4", round: "r16", label: "R16 Match 4" },
  { matchId: "ko_r16_5", round: "r16", label: "R16 Match 5" },
  { matchId: "ko_r16_6", round: "r16", label: "R16 Match 6" },
  { matchId: "ko_r16_7", round: "r16", label: "R16 Match 7" },
  { matchId: "ko_r16_8", round: "r16", label: "R16 Match 8" },
  { matchId: "ko_qf_1",  round: "qf",  label: "QF Match 1"  },
  { matchId: "ko_qf_2",  round: "qf",  label: "QF Match 2"  },
  { matchId: "ko_qf_3",  round: "qf",  label: "QF Match 3"  },
  { matchId: "ko_qf_4",  round: "qf",  label: "QF Match 4"  },
  { matchId: "ko_sf_1",  round: "sf",  label: "Semifinal 1" },
  { matchId: "ko_sf_2",  round: "sf",  label: "Semifinal 2" },
  { matchId: "ko_f_1",   round: "f",   label: "Final"       },
];

// Points per round for a correct knockout pick
// +5 for each correct pick, PLUS bonuses for deep rounds
const KO_POINTS = {
  r32: 5,
  r16: 5,
  qf:  5,
  sf:  5,  // +10 bonus if in Final Four (sf correct = top 4)
  f:   5,  // +10 bonus if finalists correct
  // champion: +10 bonus on top of everything
};

// Given picks + outcomes, compute knockout points for one bracket
function getKnockoutPoints(koPicks, koOutcomes) {
  if (!koPicks || !koOutcomes) return { total: 0, breakdown: {} };
  let total = 0;
  const breakdown = {};

  KO_ALL_MATCHES.forEach(m => {
    const pick    = koPicks[m.matchId];
    const outcome = koOutcomes[m.matchId];
    if (!outcome || !pick) return;

    let pts = 0;
    if (pick === outcome) {
      pts += KO_POINTS[m.round] || 5;
      // Bonuses
      if (m.round === "sf") pts += 10;   // final four bonus
      if (m.round === "f")  pts += 10;   // finalist bonus
    }
    // Champion: if this is the final and they got it right, extra +10
    if (m.round === "f" && pick === outcome) pts += 10;

    breakdown[m.matchId] = pts;
    total += pts;
  });

  return { total, breakdown };
}