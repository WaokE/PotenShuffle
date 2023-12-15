export const validLogin = (tokenExpire: Date) => {
    const tokenExpireString = tokenExpire;
    const tokenExpireTime = new Date(tokenExpireString);

    const currentKST = new Date();
    const currentUTC = new Date(currentKST.toISOString());

    return currentUTC < tokenExpireTime;
};
