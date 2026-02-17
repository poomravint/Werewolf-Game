export const roles = {
  Werewolf: {
    thainame: "หมาป่า",
    className: "role-bad",
    roleValue: -7,
    ability: "ตอนกลางคืน 🌑 \nทุกๆคืนสามารถเลือก 1 คนเพื่อฆ่า 🩸",
  },
  Villager: {
    thainame: "ชาวบ้าน",
    className: "role-good",
    roleValue: 1,
    ability: "เป็นเเค่ชาวบ้านตาดำๆ รอหมาป่ามากิน 💀",
  },
  Seer: {
    thainame: "นักพยากร",
    className: "role-good",
    roleValue: 5,
    ability:
      "ตอนกลางคืน 🌑 \nทุกๆคืนสามารถเลือก 1 คนเพื่อตรวจสอบ 🔮\nถ้า 👍 แปลว่าอยู่ทีมเดียวกันกับชาวบ้าน\nถ้า 👎 แปลว่าอยู่คนละทีมกับชาวบ้าน ",
  },
  Joker: {
    thainame: "ตัวตลก",
    className: "role-special",
    roleValue: -4,
    ability: "ไม่มีทีม 🤡 \nจะชนะได้ก็ต่อเมื่อถูกโหวตให้โดนแขวน 😵",
  },
  Detective: {
    thainame: "นักสืบ",
    className: "role-good",
    roleValue: 4,
    ability:
      "ตอนกลางคืน 🌑 \nทุกๆคืนสามารถเลือก 2 คนเพื่อตรวจสอบ 🔍\nถ้า 👍 แปลว่าทั้ง 2 คนอยู่ทีมเดียวกัน\nถ้า 👎 แปลว่าทั้ง 2 คนอยู่คนละทีม",
  },
  Bodygaurd: {
    thainame: "บอดี้การ์ด",
    className: "role-good",
    roleValue: 4,
    ability:
      "ตอนกลางคืน 🌑 \nทุกๆคืนสามารถเลือก 1 คนเพื่อป้องกัน 🛡️ \n❌ ห้ามเลิอกซ้ำกับคืนที่ผ่านมา",
  },
  Hunter: {
    thainame: "นายพราน",
    className: "role-good",
    roleValue: 3,
    ability: "เมื่อตาย 🩸\nสามารถเลือก 1 คนเพื่อฆ่าได้ 💥",
  },
  Sheriff: {
    thainame: "นายอำเภอ",
    className: "role-good",
    roleValue: 2,
    ability:
      "ตอนกลางวัน ☀️\nสามารถใช้ได้ 1 ครั้ง เลือก 1 คนเพื่อฆ่า 💥\n❗ถ้าคนที่ถูกฆ่าเป็นชาวบ้าน Sheriff จะตายด้วย 😵",
  },
  Wolfcub: {
    thainame: "ลูกหมาป่า",
    className: "role-bad",
    roleValue: -8,
    ability:
      "เมื่อตาย 🩸\nใช้ได้ครั้งเดียวจะทำให้ทีมหมาป่าสามารถฆ่าเพิ่มได้ 1 คน 💀\n❗ถ้า Wolfcub เป็นหมาเพียงตัวเดียว จะทำถูกเปลี่ยนให้กลายเป็น Werewolf 🐺",
  },
  Cupid: {
    thainame: "คิวปิด",
    className: "role-good",
    roleValue: -3,
    ability:
      "ก่อนวันแรก 🌞\nเลือก 2 คนเพื่อเป็นคู่รักกัน 💗\nถ้าคู่รักคนใดคนหนึ่งตาย จะต้องตายทั้งคู่ 💔",
  },
  Strongman: {
    thainame: "คนถึก",
    className: "role-good",
    roleValue: 4,
    ability: "ตอนกลางคืน 🌑 \nถ้าถูกฆ่า จะไปตายในคืนถัดไป 😵",
  },
  Silent: {
    thainame: "ไซเลนท์",
    className: "role-good",
    roleValue: 3,
    ability: "ตอนกลางคืน 🌑 \nเลือก 1 คนเพื่อใบ้ 🔇",
  },
  Priest: {
    thainame: "บาทหลวง",
    className: "role-good",
    roleValue: 4,
    ability:
      "ตอนกลางคืน 🌑 \nถ้าโดนหมาป่าฆ่า 🩸 \nจะทำให้คืนถัดไปหมาป่าไม่สามารถฆ่าใครได้ ❌",
  },
  Nakron_guy: {
    thainame: "คนคอน",
    className: "role-good",
    roleValue: 2,
    ability:
      "ตอนกลางวัน ☀️ \nใช้ได้ครั้งเดียว ถ้าใครสงสัยคุณ ❓\nคุณสามารถหยิบปืนเพื่อยิงเขาได้เลย 💥",
  },
  Serial_killer: {
    thainame: "นักฆ่าต่อเนื่อง",
    className: "role-special",
    roleValue: -8,
    ability:
      "ตอนกลางคืน 🌑\nทุกๆคืนสามารถเลือก 1 คนเพื่อฆ่า 🔪\n❗ถ้าเริ่มวันใหม่เเล้วคนที่คุณเลือกฆ่าไม่ตาย \nคุณจะตายเอง 😵\n จะชนะก็ต่อเมื่อทุกคนตายหมด 🩸",
  },
  Wolf_Hunter: {
    thainame: "นักล่าหมาป่า",
    className: "role-good",
    roleValue: 6,
    ability:
      "ตอนกลางคืน 🌑\nถ้าคุณถูกฆ่าโดยหมาป่า 🩸\nจะสุ่มหมาป่า 1 ตัวตายตามคุณไปด้วย 😵",
  },
  Wolf_Witch: {
    thainame: "หมาป่าพยากร",
    className: "role-bad",
    roleValue: -8,
    ability:
      "ตอนกลางคืน 🌑\nทุกๆคืนสามารถเลือก 1 คนเพื่อตรวจสอบ 🔮\nถ้า 👍 แปลว่าคนที่คุณเช็คเป็น Seer หรือ Detective\nถ้า 👎 แปลว่าไม่ใช่ Seer หรือ Detective\n❗ถ้า Wolf Witch เป็นหมาเพียงตัวเดียว จะทำถูกเปลี่ยนให้กลายเป็น Werewolf 🐺",
  },
  Wolf_Leader: {
    thainame: "หัวหน้าหมาป่า",
    className: "role-bad",
    roleValue: -9,
    ability:
      "ตอนกลางคืน 🌑\nถ้าถูกตรวจสอบโดย Seer 🔮\nSeer จะเห็นเป็นฝั่งชาวบ้าน 👍",
  },
   Prince: {
    thainame: "เจ้าชาย",
    className: "role-good",
    roleValue: 4,
    ability:
      "ถ้าถูกโหวตให้แขวนจะไม่ตาย ❌ และจะเปิดเผยว่าตนคือเจ้าชาย 👑",
  },
  Cursed_man: {
    thainame: "คนถูกสาป",
    className: "role-good",
    roleValue: -1,
    ability:
      "เมื่อถูกตรวจสอบจะถือว่าเป็นฝั่งหมาป่า 🐺",
  },
  

};

export const ROLE_SEQUENCE = [
  {
    role: "Priest",
    ability: "❗ เมื่อตายฝั่งหมาป่าจะอดฆ่าในคืนถัดไป",
  },
  {
    role: "Wolf_Hunter",
    ability: "❗ เมื่อตายสุ่มหมาป่าตายไปด้วย 1 ตัว 🩸",
  },
  {
    role: "Wolfcub",
    ability: "❗ เมื่อตายคืนถัดไปหมาป่าจะสามารถฆ่าเพิ่มได้ 1 คน 🩸",
  },
  {
    role: "Wolf_Leader",
    ability: "❗ เมื่อ Seer ตรวจสอบ จะเห็นเป็นฝั่งชาวบ้าน 👍",
  },
  {
    role: "Cupid",
    ability: "❗ ตอนเริ่มเกม เลือกผู้เล่น 2 คนเพื่อเป็นคู่รัก 💗",
  },
  {
    role: "Werewolf",
    ability: "🌑 เลือกฆ่าผู้เล่น 1 🩸",
  },
  {
    role: "Wolf_Witch",
    ability: "🌑 เลือกตรวจสอบผู้เล่น 1 คนว่าเป็น Seer หรือไม่ 🔮",
  },
  {
    role: "Serial_killer",
    ability: "🌑 เลือกฆ่าผู้เล่น 1 🩸",
  },
  {
    role: "Seer",
    ability: "🌑 เลือกผู้เล่น 1 คนเพื่อตรวจสอบบทบาท 🔮",
  },
  {
    role: "Detective",
    ability: "🌑 เลือกผู้เล่น 2 คนเพื่อตรวจสอบ 🔍",
  },
  {
    role: "Silent",
    ability: "🌑 เลือกใบ้ผู้เล่น 1 คน 🤐",
  },
  {
    role: "Bodygaurd",
    ability: "🌑 เลือกปกป้องผู้เล่น 1 คน 🛡️ (ห้ามซ้ำกับคืนล่าสุด)",
  },
];

// export const roleAbility = (role) => {
//   return roleAbilityMap[role];
// };

export const getThaiName = (role) => roles[role]?.thainame;
 
export const getRoleClass = (role) => roles[role]?.className;

export const getRoleAbility = (role) => roles[role]?.ability;
