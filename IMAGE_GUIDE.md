# 📸 How to Add Your Own Photos & Song

## 1. How to Add Your Own Photos

1. Open the folder `d:\weeding\public\images\` (Create a folder named `images` inside `public` if it doesn't exist).
2. Copy your wedding pictures into `d:\weeding\public\images\`.
   For example:
   - `bride.jpg` (Bride portrait photo)
   - `groom.jpg` (Groom portrait photo)
   - `hero.jpg` (Main full-screen couple hero photo)
   - `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` ...

3. Open `src/config/weddingConfig.ts` in your code editor.

4. Replace the URL links with your image paths:

```typescript
export const weddingConfig = {
  couple: {
    bride: {
      name: "សុភ័ក្ត្រា",
      fullName: "សេង សុភ័ក្ត្រា",
      photo: "/images/bride.jpg",       // <--- Put your image path here
      portrait: "/images/bride.jpg",    // <--- Put your image path here
    },
    groom: {
      name: "រតនៈ",
      fullName: "សុវណ្ណ រតនៈ",
      photo: "/images/groom.jpg",       // <--- Put your image path here
      portrait: "/images/groom.jpg",    // <--- Put your image path here
    },
  },

  media: {
    heroPhoto: "/images/hero.jpg",       // <--- Main couple hero image
    cinematicPhoto: "/images/cinematic.jpg",
    finalPhoto: "/images/final.jpg",
    
    // YouTube Song Link (automatically plays this song):
    audioUrl: "https://www.youtube.com/watch?v=-uyCMdjWK5Y",

    gallery: [
      { id: 1, src: "/images/gallery-1.jpg", alt: "កូនក្រមុំ", aspect: "portrait" },
      { id: 2, src: "/images/gallery-2.jpg", alt: "កូនកំលោះ", aspect: "portrait" },
      { id: 3, src: "/images/gallery-3.jpg", alt: "រូបថតអាពាហ៍ពិពាហ៍", aspect: "landscape" },
    ],
  },
};
```

---

## 2. How to Change Background Music Song

You can use **ANY YouTube Song Link** or a local **MP3 file**:

- **YouTube Link**: Simply paste any YouTube link into `audioUrl`:
  ```typescript
  audioUrl: "https://www.youtube.com/watch?v=-uyCMdjWK5Y"
  ```
- **Local MP3**: Put your MP3 file in `public/music/song.mp3` and set:
  ```typescript
  audioUrl: "/music/song.mp3"
  ```
