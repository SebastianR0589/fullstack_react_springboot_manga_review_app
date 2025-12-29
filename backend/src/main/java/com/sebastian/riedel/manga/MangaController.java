package com.sebastian.riedel.manga;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/mangas")
public class MangaController {
    @Autowired
    private MangaService mangaService;

    @GetMapping
    public ResponseEntity<List<Manga>> getAllMangas(){
        return new ResponseEntity<List<Manga>>(mangaService.allMangas(), HttpStatus.OK);
    }

    @GetMapping("/{myanimelistId}")
    public ResponseEntity<Optional<Manga>> getSingleManga(@PathVariable String myanimelistId){
        return new ResponseEntity<Optional<Manga>>(mangaService.singleManga(myanimelistId), HttpStatus.OK);
    }
}
