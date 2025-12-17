// Insertion Sort
function insertionSort(arr) {
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0;

    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0) {
            comparisons++;
            if (arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
                swaps++;
            } else {
                break;
            }
        }

        if (arr[j + 1] !== key) {
            arr[j + 1] = key;
            swaps++;
        }
    }
    return [arr, comparisons, swaps];
}

// Selection Sort
function selectionSort(arr) {
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            comparisons++;
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            swaps++;
        }
    }
    return [arr, comparisons, swaps];
}

// Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            comparisons++;
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaps++;
            }
        }
    }
    return [arr, comparisons, swaps];
}

// Shell Sort
function shellSort(arr) {
    const n = arr.length;
    let comparisons = 0;
    let swaps = 0;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;

            while (j >= gap) {
                comparisons++;
                if (arr[j - gap] > temp) {
                    arr[j] = arr[j - gap];
                    j -= gap;
                    swaps++;
                } else {
                    break;
                }
            }
            if (arr[j] !== temp) {
                arr[j] = temp;
                swaps++;
            }
        }
        gap = Math.floor(gap / 2);
    }
    return [arr, comparisons, swaps];
}

// Merge Sort
function mergeSortCount(arr) {
    let comparisons = 0;
    let swaps = 0;

    function merge(a, l, m, r) {
        const n1 = m - l + 1;
        const n2 = r - m;
        const L = new Array(n1);
        const R = new Array(n2);

        for (let i = 0; i < n1; i++) L[i] = a[l + i];
        for (let j = 0; j < n2; j++) R[j] = a[m + 1 + j];

        let i = 0, j = 0, k = l;

        while (i < n1 && j < n2) {
            comparisons++;
            if (L[i] <= R[j]) {
                a[k] = L[i];
                i++;
            } else {
                a[k] = R[j];
                j++;
            }
            k++;
            swaps++; 
        }

        while (i < n1) {
            a[k++] = L[i++];
            swaps++;
        }

        while (j < n2) {
            a[k++] = R[j++];
            swaps++;
        }
    }

    function mergeSort(a, l, r) {
        if (l < r) {
            const m = Math.floor(l + (r - l) / 2);
            mergeSort(a, l, m);
            mergeSort(a, m + 1, r);
            merge(a, l, m, r);
        }
    }

    const copy = [...arr];
    mergeSort(copy, 0, copy.length - 1);
    return [copy, comparisons, swaps];
}

// Quick Sort
function quickSortCount(arr) {
    let comparisons = 0;
    let swaps = 0;

    function partition(a, low, high) {
        const pivot = a[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            comparisons++;
            if (a[j] <= pivot) {
                i++;
                [a[i], a[j]] = [a[j], a[i]];
                swaps++;
            }
        }
        [a[i + 1], a[high]] = [a[high], a[i + 1]];
        swaps++;
        return i + 1;
    }

    function quickSort(a, low, high) {
        if (low < high) {
            const pi = partition(a, low, high);
            quickSort(a, low, pi - 1);
            quickSort(a, pi + 1, high);
        }
    }

    const copy = [...arr];
    quickSort(copy, 0, copy.length - 1);
    return [copy, comparisons, swaps];
}

// Heap Sort
function heapSortCount(arr) {
    let comparisons = 0;
    let swaps = 0;

    function heapify(a, size, i) {
        let largest = i;
        const l = 2 * i + 1;
        const r = 2 * i + 2;

        if (l < size) {
            comparisons++;
            if (a[l] > a[largest]) largest = l;
        }

        if (r < size) {
            comparisons++;
            if (a[r] > a[largest]) largest = r;
        }

        if (largest !== i) {
            [a[i], a[largest]] = [a[largest], a[i]];
            swaps++;
            heapify(a, size, largest);
        }
    }

    const copy = [...arr];
    const n = copy.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(copy, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [copy[0], copy[i]] = [copy[i], copy[0]];
        swaps++;
        heapify(copy, i, 0);
    }

    return [copy, comparisons, swaps];
}

// Counting Sort
function countingSort(arr) {
    const n = arr.length;
    let comparisons = 0; 
    let swaps = 0;
    const maxVal = Math.max(...arr);
    const count = new Array(maxVal + 1).fill(0);

    for (const num of arr) {
        count[num]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    const output = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        const num = arr[i];
        output[count[num] - 1] = num;
        count[num]--;
        swaps++;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }

    return [arr, comparisons, swaps];
}

// Execução
const testArrays = [
    [12, 42, 83, 25, 67, 71, 3, 4, 94, 53],
    [100, 48, 19, 61, 86, 33, 13, 43, 84, 28],
    [81, 60, 6, 49, 40, 41, 38, 64, 44, 36],
    [45, 27, 11, 89, 63, 39, 9, 58, 52, 17],
    [88, 77, 26, 62, 30, 96, 56, 65, 98, 99],
    [76, 73, 16, 95, 35, 87, 68, 69, 51, 92],
    [37, 75, 90, 82, 8, 18, 23, 93, 57, 10],
    [15, 97, 14, 29, 7, 24, 31, 59, 78, 85]
];

console.log(insertionSort([...testArrays[0]]));
console.log(selectionSort([...testArrays[1]]));
console.log(bubbleSort([...testArrays[2]]));
console.log(shellSort([...testArrays[3]]));
console.log(mergeSortCount(testArrays[4]));
console.log(quickSortCount(testArrays[5]));
console.log(heapSortCount(testArrays[6]));
console.log(countingSort([...testArrays[7]]));