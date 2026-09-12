export interface WeddingConfig {
  couple: {
    bride: {
      name: string;
      fullName: string;
      role: string;
      father: string;
      mother: string;
      photo: string;
      portrait: string;
    };
    groom: {
      name: string;
      fullName: string;
      role: string;
      father: string;
      mother: string;
      photo: string;
      portrait: string;
    };
  };
  wedding: {
    title: string;
    subTitle: string;
    invitationGreeting: string;
    targetDateISO: string;
    dayKhmer: string;
    dateKhmer: string;
    monthKhmer: string;
    yearKhmer: string;
    lunarCalendarKhmer: string;
    timeMorning: string;
    timeBanquet: string;
    venueName: string;
    hallName: string;
    address: string;
    googleMapsUrl: string;
    embedMapUrl: string;
  };
  schedule: Array<{
    time: string;
    title: string;
    description: string;
    iconName: 'sun' | 'scissors' | 'flame' | 'sparkles' | 'utensils' | 'music';
  }>;
  media: {
    heroPhoto: string;
    cinematicPhoto1: string;
    cinematicPhoto2: string;
    finalPhoto: string;
    videoPoster: string;
    videoUrl: string;
    audioUrl: string;
    gallery: Array<{
      id: number;
      src: string;
      alt: string;
      aspect: 'portrait' | 'landscape' | 'square';
    }>;
  };
  quotes: {
    emotional: string;
    cinematic: string;
    finalMessage: string;
    closingGratitude: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    bride: {
      name: "គីមឡែន",
      fullName: "លួប គីមឡែន",
      role: "កូនក្រមុំ",
      father: "លោក ហាក់ នឿន",
      mother: "លោកស្រី ញិប សេងហ៊ុន",
      photo: "/img/1.JPEG",
      portrait: "/img/1.JPEG",
    },
    groom: {
      name: "សារៈ",
      fullName: "រុន សារៈ",
      role: "កូនកំលោះ",
      father: "លោក គី រុន",
      mother: "លោកស្រី ឃុត មករា",
      photo: "/img/2.PNG",
      portrait: "/img/2.PNG",
    },
  },

  wedding: {
    title: "សិរីមង្គលអាពាហ៍ពិពាហ៍",
    subTitle: "នឹងប្រារព្ធឡើងនៅថ្ងៃ",
    invitationGreeting: "សូមគោរពអញ្ជើញ លោក លោកស្រី អ្នកនាងកញ្ញា ចូលរួមក្នុងពិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ",
    targetDateISO: "2026-12-12T17:00:00",
    dayKhmer: "ថ្ងៃសៅរ៍",
    dateKhmer: "ទី១២",
    monthKhmer: "ខែធ្នូ",
    yearKhmer: "ឆ្នាំ២០២៦",
    lunarCalendarKhmer: "ត្រូវនឹងថ្ងៃ ៣កើត ខែមិគសិរ ឆ្នាំម្សាញ់ សប្តស័ក ព.ស. ២៥៦៩",
    timeMorning: "ម៉ោង ០៧:០០ ព្រឹក",
    timeBanquet: "ម៉ោង ០៥:០០ ល្ងាច",
    venueName: "អាគារពិព័រណ៍ ព្រីមៀ សែនសុខ",
    hallName: "សាលពិធី (Hall A)",
    address: "ផ្លូវលេខ ១០០៣ សង្កាត់ភ្នំពេញថ្មី ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ",
    googleMapsUrl: "https://maps.google.com/?q=Premier+Centre+Sen+Sok+Phnom+Penh",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.5684784407866!2d104.8812!3d11.5835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951664d5089bf%3A0x6fbca83c6d66e741!2sPremier%20Centre%20Sen%20Sok!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh",
  },

  schedule: [
    {
      time: "០៧:០០ ព្រឹក",
      title: "ពិធីសូត្រមន្ត",
      description: "ពិធីរៀបចំក្បួនហែជំនូនផ្លែឈើ និងសូត្រមន្តប្រកាសសិរីមង្គល",
      iconName: "sun",
    },
    {
      time: "០៨:៣០ ព្រឹក",
      title: "ពិធីកាត់សក់",
      description: "ពិធីកាត់សក់បង្កក់សិរីជូនកូនកំលោះ និងកូនក្រមុំ",
      iconName: "scissors",
    },
    {
      time: "១០:០០ ព្រឹក",
      title: "ពិធីបង្វិលពពិល",
      description: "ពិធីបង្វិលពពិលបក់ផ្សែងទៀនជ័យ ផ្តល់ពរជ័យសិរីសួស្តី",
      iconName: "flame",
    },
    {
      time: "១១:៣០ ព្រឹក",
      title: "ពិធីសំពះផ្ទឹម",
      description: "ពិធីចងដៃសំពះផ្ទឹម និងសូមពរជ័យពីមាតាបិតាចាស់ទុំ",
      iconName: "sparkles",
    },
    {
      time: "១២:០០ ថ្ងៃត្រង់",
      title: "អាហារថ្ងៃត្រង់",
      description: "ការទទួលទានអាហារថ្ងៃត្រង់ជាលក្ខណៈគ្រួសារ និងភ្ញៀវកិត្តិយស",
      iconName: "utensils",
    },
    {
      time: "០៥:០០ ល្ងាច",
      title: "ពិធីជប់លៀង",
      description: "ពិធីពិសាភោជនាហារ និងអបអរសាទរមង្គលការយ៉ាងគគ្រឹកគគ្រេង",
      iconName: "music",
    },
  ],

  media: {
    heroPhoto: "/img/6.jpg",
    cinematicPhoto1: "/img/6.jpg",
    cinematicPhoto2: "/img/4.PNG",
    finalPhoto: "/img/6.jpg",
    videoPoster: "/img/4.PNG",
    videoUrl: "/img/video.mp4",
    audioUrl: "https://www.youtube.com/watch?v=-uyCMdjWK5Y&list=RD-uyCMdjWK5Y&start_radio=1",
    gallery: [
      { id: 1, src: "/img/2.PNG", alt: "កូនក្រមុំ", aspect: "portrait" },
      { id: 2, src: "/img/1.JPEG", alt: "កូនកំលោះ", aspect: "portrait" },
      { id: 3, src: "/img/6.jpg", alt: "រូបថតអាពាហ៍ពិពាហ៍", aspect: "landscape" },
      { id: 4, src: "/img/4.PNG", alt: "រូបថតអនុស្សាវរីយ៍", aspect: "portrait" },
      { id: 5, src: "/img/5.JPG", alt: "រូបថតគូស្នេហ៍", aspect: "square" },
      { id: 6, src: "/img/6.jpg", alt: "បរិយាកាសពិធី", aspect: "landscape" },
    ],
  },

  quotes: {
    emotional: "សេចក្ដីស្រឡាញ់ គឺជាការជ្រើសរើសគ្នា ជារៀងរាល់ថ្ងៃ",
    cinematic: "ពីរនាក់ ពីរបេះដូង ប៉ុន្តែជាក្តីស្រឡាញ់តែមួយ",
    finalMessage: "ពីរបេះដូង មួយក្តីស្រឡាញ់ មួយជីវិត",
    closingGratitude: "សូមអរគុណ សម្រាប់ការចូលរួមក្នុងថ្ងៃដ៏មានន័យ សម្រាប់ពួកយើង។",
  },
};
