function formatRupiah (angka) {
    var bilangan =
        angka
        .toString()
        .replace(/(\d)(?= (\d{3}) + (?!\d))/g, '$1');

    return 'Rp' + bilangan;
}

    var harga = 1234567;
    var hargaRupiah = formatRupiah(harga);
    console.log(hargaRupiah);