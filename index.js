const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = function(data, callback) {
	const result = [...data]
	callback(result)
	for (let i = 0; i < result.length; i++) {
		result[i] = `${i + 1}. ${result[i]}`
	}
	return result
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = function(list) {
	list.sort()
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = function(list) {
	list.sort().reverse()
};

// ! JANGAN DIMODIFIKASI
(function main() {
	console.log(sorter?.(names, sortAscending)?.join("\n"));
	console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
	sorter,
	sortAscending,
	sortDescending,
	names,
};