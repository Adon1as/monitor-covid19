package com.pratica.covid19m.controller;

import com.pratica.covid19m.model.CountryVaccination;
import com.pratica.covid19m.model.IsoDatePK;
import com.pratica.covid19m.model.GraphDTO;
import com.pratica.covid19m.service.CountryVaccinationService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(value = {"/countryVaccinatio"} )
public class CountryVaccinationController {

    private final CountryVaccinationService service;

    public CountryVaccinationController(CountryVaccinationService service) {
        this.service = service;
    }

    @GetMapping
    public String status(){
        return "API ON";
    }

    @PostMapping("/upload")
    public void persistCSV(@RequestParam("file") MultipartFile file) {
        service.persistCSV(file);
    }

    @GetMapping("/vacPDay")
    public List<GraphDTO> vacPday(){ return service.vacPDay();}


    @GetMapping("/getAll")
    public List<CountryVaccination> getAll(){
        return service.findAll();
    }

    @GetMapping("/get/{isoCode}/{date}")
    public Optional<CountryVaccination> getById(@PathVariable(value="isoCode") String isoCode, @PathVariable(value="date")String date){
        return service.findByIsoDate(new IsoDatePK(isoCode,LocalDate.parse(date)));
    }

}
