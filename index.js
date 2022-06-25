function superbowlWin(record) {
    const result = record.find(i => i.result === 'W')
    return !!result ? result.year : undefined
}

