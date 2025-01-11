const ffmpeg = require('fluent-ffmpeg');

const optimizeVideo = () => {
  ffmpeg('input/confetti.mp4')
    .outputOptions([
      '-vf scale=1920:-2', // Scale to 1080p
      '-c:v libx264',      // Use H.264 codec
      '-crf 28',           // Compression quality (18-28 is good)
      '-preset slow',      // Better compression
      '-movflags +faststart', // Web optimization
      '-an'               // Remove audio if not needed
    ])
    .save('public/videos/confetti.mp4')
    .on('end', () => console.log('Video optimization complete'));
};
