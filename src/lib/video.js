/*
 * Make sure that given time matches a frame in the video
 */
export const roundToFrame = (time, fps) => {
  const frameFactor = Math.round((1 / fps) * 10000) / 10000
  const frameNumber = Math.round(time / frameFactor)
  let roundedTime = frameNumber * frameFactor
  roundedTime = Math.round((roundedTime) * 10000) / 10000
  return roundedTime
}

/*
 * Turn a frame number into seconds depending on context.
 */
export const frameToSeconds = (nbFrames, production, shot) => {
  let fps = 25
  if (shot && shot.fps) fps = shot.fps
  if (production && production.fps) fps = production.fps
  return Math.round((nbFrames / fps) * 1000) / 1000
}

/*
 * Display time at this format.
 */
export const formatTime = (seconds) => {
  let milliseconds = `${Math.round((seconds % 1) * 1000)}`.padStart(3, '0')
  milliseconds = '.' + milliseconds
  try {
    return new Date(1000 * seconds)
      .toISOString()
      .substr(14, 5) + milliseconds
  } catch (err) {
    console.error(err)
    return '00:00.000'
  }
}

/*
 * Convert time to a frame string.
 */
export const formatFrame = (rawTime, fps) => {
  let frame = Math.floor(rawTime.toFixed(5) * fps)
  if (frame < 0) frame = 0
  return `${frame}`.padStart(3, '0')
}
