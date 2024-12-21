export const BASE_URL = 'https://www.carrefour.com.ar';

export const findItemUrl = (itemUniqueId: string) => `${BASE_URL}/${itemUniqueId}/s?_q=${itemUniqueId}&map=ft&__pickRuntime=queryData&__device=phone`;
