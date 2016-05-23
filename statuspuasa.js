var d = new Date();
    var time = d.getHours();
    if (time>=0 && time<3){document.write("Nanti Mulai Sahur");
    }
    else if (time>=3 && time<4){document.write("<a href='http://paket-r-l-intan-brov2.blogspot.co.id/2016/05/status-puasa-sahur.html' target='_blank'>Sahur</a>");
    }
    else if (time>=4 && time<5){document.write("<a href='http://paket-r-l-intan-brov2.blogspot.co.id/2016/05/status-puasa-imsak-dan-sholat-subuh.html' target='_blank'>Imsak</a>");
    }
    else if (time>=5 && time<15){document.write("<a href='http://paket-r-l-intan-brov2.blogspot.co.id/2016/05/status-puasa-batal-puasa.html' target='_blank'>Batal Puasa</a>");
    }
    else if (time>=15 && time<18){document.write("<a href='http://paket-r-l-intan-brov2.blogspot.co.id/2016/05/status-puasa-ngabuburit.html' target='_blank'>Ngabuburit</a>");
    }
    else if (time>=18 && time<19){document.write("<a href='http://paket-r-l-intan-brov2.blogspot.co.id/2016/05/status-puasa-berbuka-puasa.html' target='_blank'>Berbuka Puasa</a>");
    }
    else if (time>=19 && time<21){document.write("<a href='http://paket-r-l-intan-brov2.blogspot.co.id/2016/05/status-puasa-sholat-tarawih.html' target='_blank'>Sholat Tarawih</a>");
    }
    else if (time>=21 && time<=23){document.write("<a href='http://paket-r-l-intan-brov2.blogspot.co.id/2016/05/status-puasa-selamat-tidur-malam.html' target='_blank'>Selamat Tidur</a>");
    }
