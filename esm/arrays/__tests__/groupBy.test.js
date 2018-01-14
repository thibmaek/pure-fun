import groupBy from '../groupBy';

const records = [
  { format: `lp`, title: `A Moon Shaped Pool`, artist: `Radiohead` },
  { format: `lp`, title: `Elaenia`, artist: `Floating Points` },
  { format: `single`, title: `The 4th Verdict`, artist: `Answer Code Request` },
  { format: `single`, title: `Klockworks 10`, artist: `Etapp Kyle` },
];

const groupByFormat = {
  single: [...records.filter(r=>r.format === `single`)],
  lp: [...records.filter(r=>r.format === `lp`)],
};

describe(`[Arrays]: groupBy`, ()=>{
  it(`should group the objects by given key`, ()=>{
    expect(groupBy(records, `format`)).toEqual(groupByFormat);
  });

  it(`should return an Object, not an Array`, ()=>{
    expect(groupBy(records, `format`)).toBeInstanceOf(Object);
    expect(typeof groupBy(records, `format`)).toBe(`object`);
    expect(Array.isArray(groupBy(records, `format`))).toBe(false);
  });

  it(`should group as key 'undefined' when given key is missing`, ()=>{
    const copyRecords = [...records, { title: `Missing format` }];
    expect(groupBy(copyRecords, `format`)).toEqual({
      ...groupByFormat,
      undefined: [{ title: `Missing format` }],
    });
    expect(groupBy(copyRecords, `format`)).toBeInstanceOf(Object);
  });

});
