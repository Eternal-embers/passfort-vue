export function shuffleDecrypt(shuffledData, shuffleOrder) {
    const totalChunks = shuffleOrder.length;
    const chunkSize = Math.floor(shuffledData.length / totalChunks); 
    const remainder = shuffledData.length % totalChunks; 
    const originalData = new Uint8Array(shuffledData.length);

    // 按照 shuffleOrder 恢复数据（只处理完整分片的部分，数据尾部小于 chunkSize 的部分不处理）
    for (let i = 0; i < totalChunks; i++) {
        const srcIndex = shuffleOrder[i] * chunkSize;
        const destIndex = i * chunkSize;
        originalData.set(shuffledData.subarray(srcIndex, srcIndex + chunkSize), destIndex);
    }

    // 处理尾部剩余字节
    if (remainder > 0) {
        const lastChunkIndex = totalChunks * chunkSize; // 尾部数据的起始位置
        originalData.set(shuffledData.subarray(lastChunkIndex), lastChunkIndex);
    }

    return originalData;
}