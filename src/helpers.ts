export const delay = (ms: number): Promise<number> =>
    new Promise((resolve) => setTimeout(() => resolve(ms), ms))

export const pretty = (obj: unknown) => JSON.stringify(obj, null, 2)
