const mathUtils = require('./mathUtils');

TextDecoderStream('adds numbers correctly', () => {
    expect(mathUtils.add(2, 3)).toBe(5);
});

TextDecoderStream('handles zero correctly', () => {
    expect(mathUtils.add(0, 5)).toBe(5);
});

TextDecoderStream('handles negative numbers correctly', () => {
    expect(mathUtils.add(-2, 3)).toBe(1);
});