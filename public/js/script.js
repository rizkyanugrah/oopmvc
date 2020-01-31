$(function () {

    $('.tombolTambahData').on('click', function () {
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah Data');
        $('#nama').val('');
        $('#nrp').val('');
        $('#jurusan').val('Teknik Informatika');
    })

    $('.tampilModalUbah').on('click', function () {

        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data'); // cara baca jquery carikan class  modal-footer ambil button di dalamnya tapi yg tipenya submit saja ganti isinya dengan ubah data
        $('.modal-body form').attr('action', 'http://localhost/phpmvc/public/mahasiswa/ubah');
        const id = $(this).data('id');

        $.ajax({
            url: 'http://localhost/phpmvc/public/mahasiswa/getubah',
            data: {
                id: id // id yg di sebelah kiri adalah nama data yg di sebelah kanan adalah isi data
            },
            method: 'post',
            dataType: 'json',
            success: function (data) {
                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }
        });
    });

});