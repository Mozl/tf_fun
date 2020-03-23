tf.tidy(() => {
  const a = tf.tensor([1,2,3]);
  const shape = [2, 2];
  const b = tf.tensor2d([1, 2, 3, 4], shape, 'int32')
  const d = tf.tensor2d([1, 2, 3, 4], shape, 'int32');
  const dd = tf.variable(d)
  // dd.transpose()
  // const c = a.add(b)
  const e = b.matMul(d)
  
  console.log(e);
  e.print()
})

// tf.memory().numTensors
console.log('tf.memory().numTensors: ', tf.memory().numTensors);




// const show = async () => {
//   await tense.data()
//     .then((value) => console.log(value))
// }

// console.log(show());

// console.log(tense.dataSync());
