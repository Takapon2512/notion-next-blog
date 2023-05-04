import { PageType, RichTextType } from "@/types/GlobalTypes";

export const getText = (richTextArr: RichTextType[]) => {
    try {
        const textArr = richTextArr.map((richText) => richText.plain_text)
        return textArr.join('')
    } catch (err) {
        alert(err)
    }

    //失敗しても文字列が返ってくるようにする
    return ''
}

export const getCover = (cover: PageType['cover']) => {
    if (cover && cover.file) return cover.file.url
    if (cover && cover.external) return cover.external.url
    return '/noimage.png'
}

export const getDate = (date: {start: string} ) => {
    try {
        return date.start
    } catch(err) {
        alert(err)
    }
    return '-'
}

export const getMultiselect = (multiSelect: [{name: string}]) => {
    try {
        return multiSelect.map((tag) => tag.name)
    } catch (err) {
        alert(err)
    }

    return []
}