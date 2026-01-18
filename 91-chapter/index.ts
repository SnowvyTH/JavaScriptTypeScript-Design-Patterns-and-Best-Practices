type Lang = 'en' | 'th'

type FieldKey = `title_${Lang}`

type labels = {
    [K in Lang as `title_${K}`]: string
}
