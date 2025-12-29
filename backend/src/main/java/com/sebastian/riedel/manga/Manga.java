package com.sebastian.riedel.manga;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "mangas")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Manga {

    @Id
    private ObjectId id;

    private String myanimelistId;

    private String title;

    private String releaseDate;

    private String myanimelistLink;

    private String poster;

    private List<String> genres;

    private List<String> backdrops;

    @DocumentReference
    private List<Review> reviewIds;
}
