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
  story: Array<{
    year: string;
    title: string;
    description: string;
    image: string;
  }>;
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
      name: "សុភ័ក្ត្រា",
      fullName: "សេង សុភ័ក្ត្រា",
      role: "កូនក្រមុំ",
      father: "លោក សេង វិបុល",
      mother: "លោកស្រី មាស គឹមហុង",
      photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    },
    groom: {
      name: "រតនៈ",
      fullName: "សុវណ្ណ រតនៈ",
      role: "កូនកំលោះ",
      father: "លោក អ៊ុំ សុវណ្ណ",
      mother: "លោកស្រី ចាន់ សុខា",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
      portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
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

  story: [
    {
      year: "២០១៩",
      title: "ថ្ងៃដែលយើងបានស្គាល់គ្នា",
      description: "ជំនួបដំបូងដែលពោរពេញដោយស្នាមញញឹម និងការចាប់ផ្តើមនៃចំណងមិត្តភាពដ៏ល្អបរិសុទ្ធ។",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    },
    {
      year: "២០២១",
      title: "ថ្ងៃដែលយើងចាប់ផ្ដើមដើរជាមួយគ្នា",
      description: "ស្នេហាបានរីកលូតលាស់ពីមួយថ្ងៃទៅមួយថ្ងៃ ដោយក្ដីយោគយល់ និងការមើលថែទាំគ្នាយ៉ាងកក់ក្ដៅ។",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800",
    },
    {
      year: "២០២៤",
      title: "ថ្ងៃដែលយើងសម្រេចចិត្តថានឹងកាន់ដៃគ្នារហូតទៅ",
      description: "ពាក្យសន្យាដ៏មានន័យនៅចំពោះមុខធម្មជាតិ ថានឹងឆ្លងកាត់គ្រប់ឧបសគ្គក្នុងជីវិតជាមួយគ្នា។",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    },
    {
      year: "២០២៦",
      title: "ថ្ងៃដែលយើងចាប់ផ្ដើមជីវិតថ្មីជាមួយគ្នា",
      description: "ទំព័រថ្មីនៃសិរីមង្គលអាពាហ៍ពិពាហ៍ដែលត្រូវបានបង្កើតឡើងដោយក្ដីស្រឡាញ់ និងការជូនពរពីអ្នកទាំងអស់គ្នា។",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    },
  ],

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
    heroPhoto: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1600",
    cinematicPhoto1: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1600",
    cinematicPhoto2: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1600",
    finalPhoto: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1600",
    videoPoster: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=traditional-asian-ambient-112520.mp3",
    gallery: [
      { id: 1, src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800", alt: "Bride portrait", aspect: "portrait" },
      { id: 2, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800", alt: "Groom portrait", aspect: "portrait" },
      { id: 3, src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200", alt: "Pre-wedding moment", aspect: "landscape" },
      { id: 4, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800", alt: "Engagement photo", aspect: "portrait" },
      { id: 5, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", alt: "Couple embrace", aspect: "square" },
      { id: 6, src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1200", alt: "Wedding flowers & decor", aspect: "landscape" },
    ],
  },

  quotes: {
    emotional: "សេចក្ដីស្រឡាញ់ គឺជាការជ្រើសរើសគ្នា ជារៀងរាល់ថ្ងៃ",
    cinematic: "ពីរនាក់ ពីរបេះដូង ប៉ុន្តែជាក្តីស្រឡាញ់តែមួយ",
    finalMessage: "ពីរបេះដូង មួយក្តីស្រឡាញ់ មួយជីវិត",
    closingGratitude: "សូមអរគុណ សម្រាប់ការចូលរួមក្នុងថ្ងៃដ៏មានន័យ សម្រាប់ពួកយើង។",
  },
};
